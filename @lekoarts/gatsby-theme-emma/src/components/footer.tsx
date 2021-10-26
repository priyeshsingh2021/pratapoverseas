/** @jsx jsx */
import { Box, Link, Flex, jsx, useColorMode } from "theme-ui"

const Footer = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return (
    <Box as="footer" variant="layout.footer">
      Pratap overseas is [ISO - 9001 2015] an exporter importer and global sourcing company from India engaged in export and import of products.
      We are here to enhance the growth of artisans, sculptures as well as quality manufacturers of brass products.
      These products are extensively identified for their fine quality and high durability. These products can be custom made according to client’s need.
      Our competitive price structure and moral business policy have garnered a huge customer base all across the World.
      Managing our customer need is an important part of our network.
      <br/>
      <br /> Bihar - 800023, India | Contact: +91-7763912309
      <br/>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        {isDark ? (
          <img width="80" height="80" src="https://i.ibb.co/KsHdzpX/avatar.png" alt="PratapOverseas Logo" />
        ) : (
          <img width="80" height="80" src="https://i.ibb.co/KsHdzpX/avatar.png" alt="PratapOverseas Logo" />
        )}
        {` `}
        <div sx={{ mx: 3 }}>Pratap Overseas</div>
        {` `}
      </Flex>
    </Box>
  )
}

export default Footer
