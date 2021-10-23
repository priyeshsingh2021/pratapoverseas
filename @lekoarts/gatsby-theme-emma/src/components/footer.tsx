/** @jsx jsx */
import { Box, Link, Flex, jsx, useColorMode } from "theme-ui"

const Footer = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return (
    <Box as="footer" variant="layout.footer">
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br /> Bihar - 800023, India | Contact: +91-7763912309
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
