import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Banner, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-blog/style.css'
import '../../app/globals.css'

export const metadata = {
  title: 'Blog Example',
}

export default async function BlogLayout({ children, metadata }) {
  // Define the banner
  const banner = (
    <Banner storageKey="4.0-release">
      HumannDesign Blog is HERE!.{' '}
      <a
        href="#"
        style={{
          textDecoration: 'underline',
          textUnderlinePosition: 'from-font',
        }}
      >
        Read more →
      </a>
    </Banner>
  )

  // Get the hero image from the metadata (optional)
  const heroImage = metadata?.image || '/images/main_logo.png';  // Default hero image

  return (
    <Layout className='text-white' banner={banner}>
      <Navbar pageMap={await getPageMap()}>
        <Search />
        <ThemeSwitch />
      </Navbar>

      {/* Hero Image Section */}
      <div style={{ width: '100%', height: 'auto', marginBottom: '20px' }}>
        <img
          src={heroImage}
          alt="Hero Image"
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      </div>

      <div className='text-black dark:text-white'>

        {children}

      </div>


      <Footer>
        <abbr
          title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
          style={{ cursor: 'help' }}
        >
          CC BY-NC 4.0
        </abbr>{' '}
        {new Date().getFullYear()} © Dimitri POSTOLOV.
        <a href="/feed.xml" style={{ float: 'right' }}>
          RSS
        </a>
      </Footer>
    </Layout>
  )
}
