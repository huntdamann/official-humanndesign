import * as THREE from "three";

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `

const vec3 upper_color_1 = vec3(0.7, 0.1, 0.4);
const vec3 upper_color_2 = vec3(0.4 , 0.3 , 0.8);
const vec3 lower_color_1 = vec3(1.0, 0.7, 0.5);
const vec3 lower_color_2 = vec3(1.0, 1.0, 0.9);

uniform highp float CANVAS_W;
uniform highp float CANVAS_H;
uniform highp float u_Time;
uniform sampler2D u_gradient;

const highp float I = 0.1;
const float L = 0.0015;
const float S = 0.12;
const float A = 40.0;
const float F = 0.043;


const highp float PI = 3.14;

const float BLUR_AMOUNT = 150.0;

vec2 point2vec(float x, float y) {

    vec2 point = vec2(x , y);

    return point;

}

vec3 point2vec3(float x, float y, float z) {

vec3 point = vec3(x, y, z);
return point;


}
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}



vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+10.0)*x);
}

float p_step(float t) {
  return t * t * t * (t * (6.0 * t - 15.0) + 10.0);
}
  vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float pnoise(vec3 v)
  { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
  }


float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
// First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

// Other corners
  // vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

// Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
		+ i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

// Gradients: 41 points uniformly over a line, mapped onto a diamond.
// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

// Normalise gradients implicitly by scaling m
// Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

// Compute final noise value at P
vec3 g = vec3(
    a0.x * x0.x + h.x * x0.y,
    a0.yz * x12.xz + h.yz * x12.yw
);
  // vec3 g;
  // g.x  = a0.x  * x0.x  + h.x  * x0.y;
  // g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float wave_noise(float pos, float offset) {

    float time = u_Time * offset;
    float noise = 0.0;
    vec2 n_1 = point2vec(pos * (L / 1.00), time * F * 8.0 * S * 1.00);
    vec2 n_2 = point2vec(pos * (L / 1.30), time * F * 8.0 * S * 1.26);
    vec2 n_3 = point2vec(pos * (L / 1.86), time * F * 8.0 * S * 1.09);
    vec2 n_4 = point2vec(pos * (L / 3.25), time * F * 8.0 * S * 0.89);

    noise += snoise(n_1) * A * 0.85;
    noise += snoise(n_2) * A * 1.15;
    noise += snoise(n_3) * A * 0.60;
    noise += snoise(n_4) * A * 0.40;

    return noise;
}
 float calc_blur(float x, float y, float offset) {

     float time = u_Time * offset;

 const float L = 0.0018;
  const float S = 0.1;
  const float F = 0.034;
   vec2 n_1 = point2vec(x * L + F * time, time * S);
   

  float bg_blur = snoise(n_1);
  float t = (bg_blur + 1.0) / 2.0;
  t = pow(t, 2.5);

  float blur = mix(1.0, BLUR_AMOUNT, t);
  return blur;
}


float wave_alpha(float Y, float wave_height, float x, float y) {

  float offset = Y * wave_height / 150.0;
  float wave_y = Y + wave_noise(x, offset) * wave_height;
  float dist = wave_y - y;
  float blur = calc_blur(x, y, offset);
  float alpha = clamp(0.5 + dist / blur, 0.0, 1.0);
  alpha = p_step(alpha);
  return alpha;

}

  float background_noise(float x, float y, float offset) {

      float time = u_Time + offset;

    float bg_noise = 0.5;
     float l = 0.0017;
    float s = 0.2;

    bg_noise += (pnoise(point2vec3(x * l * 1.0, y * l * 1.00, time * s))) * 0.30;
    bg_noise += (pnoise(point2vec3(x * l * 0.6, y * l * 0.85, time * s))) * 0.26;
    bg_noise += (pnoise(point2vec3(x * l * 0.4, y * l * 0.70, time * s))) * 0.22;


    float lightness = clamp(bg_noise, 0.0, 1.0);

    return lightness;

  }
    vec3 calc_color(float t) {

    vec3 color1 = vec3(0.031, 0.0, 0.561);
    vec3 color2 = vec3(0.980, 0.0, 0.125);
    vec3 color3 = vec3(1.0,   0.8, 0.169);
    vec3 color = color1;
    color = mix(color, color2, min(1.0, t * 2.0));
    color = mix(color, color3, max(0.0, (t - 0.5) * 2.0));
    return color;
}




  void main() {


     highp float WAVE1_HEIGHT = 1.0;
     highp float WAVE2_HEIGHT = 1.5;
     highp float WAVE1_Y = 0.80 * CANVAS_H;
    highp float WAVE2_Y = 0.35 * CANVAS_H;
    float y = gl_FragCoord.y;
    float x = gl_FragCoord.x - CANVAS_W / 2.0;
    float x_2 = gl_FragCoord.x;
    highp float Y = 0.5 * CANVAS_H;
    float freq = (2.0 * PI ) / L;
    
    float MID_Y = CANVAS_H * 0.5;
    

    float wave1_alpha = wave_alpha(WAVE1_Y, WAVE1_HEIGHT, x_2, y);
    float wave2_alpha = wave_alpha(WAVE2_Y, WAVE2_HEIGHT, x_2, y);
  

    vec3 background_color_1 = vec3(0.364, 0.580, 0.231);
    vec3 wave1_color = vec3(0.094, 0.502, 0.910);
    vec3 wave2_color = vec3(0.384, 0.827, 0.898);

    vec3 color = background_color_1;
    color = mix(color, wave1_color, wave1_alpha);
    color = mix(color, wave2_color, wave2_alpha);

    // Simplex Noise
    float Y_SCALE = 2.0;
    float x_noise = gl_FragCoord.x;
    float y_noise = gl_FragCoord.y * Y_SCALE;
  
    // float lightness = background_noise(x_noise, y_noise);
float bg_lightness = background_noise(x_noise, y_noise,0.0);
float w1_lightness = background_noise(x_noise, y_noise, 200.0);
float w2_lightness = background_noise(x_noise, y_noise, 400.0);

float lightness = bg_lightness;
lightness = mix(lightness, w1_lightness, wave1_alpha);
lightness = mix(lightness, w2_lightness, wave2_alpha);

    // gl_FragColor = texture2D(u_gradient, vec2(lightness, 1.0));

    // gl_FragColor = vec4(calc_color(lightness), 1.0);
// gl_FragColor = vec4(vec3(lightness), 1.0);
gl_FragColor = texture2D(u_gradient, vec2(lightness, 0.5));

    // gl_FragColor = vec4(color, 1.0); // solid orange
  }
`;
const vibes = {
  moneyGetter: ["hsl(139deg 88% 21%)", "hsl(38deg 45% 55%)"],
  main: [
    "hsl(0deg 0% 0%)",
    "hsl(185deg 15% 20%)",
    "hsl(38deg 45% 45%)",
    "hsl(185deg 30% 50%)",
    "hsl(185deg 40% 76%)",
  ],
  dark: ["hsl(240deg 12% 6%)", "hsl(285deg 41% 23%)", "hsl(263deg 39% 30%)"],
};

let renderer, scene, camera, material, bg;
let width, height, dpr;
let animationId = null;
let running = false;
let hasFadedIn = false;

function buildGradientTexture(w, h, colorArray) {
  // A fresh OffscreenCanvas created IN the worker needs no transfer
  const gradCanvas = new OffscreenCanvas(w, h);
  const ctx = gradCanvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, w, 0);
  colorArray.forEach((color, i) => {
    gradient.addColorStop(i / (colorArray.length - 1), color);
  });
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);
  return new THREE.CanvasTexture(gradCanvas);
}

function init({ canvas, width: w, height: h, dpr: d, option }) {
  width = w;
  height = h;
  dpr = d;

  const colorArray = vibes[option] ?? vibes.main;
  const gradientTexture = buildGradientTexture(w * d, h * d, colorArray);
  gradientTexture.wrapS = THREE.ClampToEdgeWrapping;
  gradientTexture.wrapT = THREE.ClampToEdgeWrapping;
  gradientTexture.minFilter = THREE.LinearFilter;
  gradientTexture.magFilter = THREE.LinearFilter;

  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(dpr);
  renderer.setSize(width, height, false);

  const geometry = new THREE.PlaneGeometry(2, 2);
  material = new THREE.ShaderMaterial({
    uniforms: {
      CANVAS_W: { value: width * dpr },
      CANVAS_H: { value: height * dpr },
      u_Time: { value: 0 },
      u_gradient: { value: gradientTexture },
    },
    vertexShader,
    fragmentShader,
  });
  bg = new THREE.Mesh(geometry, material);

  running = true;
  animate();
}

function animate() {
  if (!running) return;
  const time = performance.now() * 0.001;
  material.uniforms.u_Time.value = time;

  renderer.render(bg, camera);

  if (!hasFadedIn) {
    hasFadedIn = true;
    self.postMessage({ type: "ready" });
  }

  animationId = requestAnimationFrame(animate);
}

self.onmessage = (e) => {
  const { type } = e.data;

  if (type === "init") {
    init(e.data);
  }

  if (type === "resize" && renderer) {
    width = e.data.width;
    height = e.data.height;
    dpr = e.data.dpr;
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    material.uniforms.CANVAS_W.value = width * dpr;
    material.uniforms.CANVAS_H.value = height * dpr;
  }

  if (type === "pause") {
    running = false;
    if (animationId) cancelAnimationFrame(animationId);
  }

  if (type === "resume" && !running && renderer) {
    running = true;
    animate();
  }
};
