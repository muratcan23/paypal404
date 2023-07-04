import { Divider, Flex, HStack, Image, Text } from "@chakra-ui/react";
import UsaIcon from "../../icons/UsaIcon";

const FooterLinksUp = [
  { text: "Help", url: "/help" },
  { text: "Contact", url: "/contact" },
  { text: "Fees", url: "/fees" },
  { text: "Security", url: "/security" },
  { text: "Apps", url: "/apps" },
  { text: "Shop", url: "/shop" },
  { text: "Enterprise", url: "/enterprise" },
  { text: "Partners", url: "/partners" },
];
const FooterLinksDown = [
  { text: "About", url: "/about" },
  { text: "Newsroom", url: "/newsroom" },
  { text: "Jobs", url: "/jobs" },
  { text: "Inverstor Realtions", url: "/investors" },
  { text: "Values in Action", url: "/valPolicy" },
];

const Footer = () => {
  return (
    <Flex
      w="100%"
      h="340px"
      bg="#fff"
      justifyContent="center"
      alignItems="center"
    >
      <Flex w="80%" h="227px" flexDirection="column">
        <Flex w="673px" h="51px">
          <Flex w="193px" h="51px" cursor="pointer">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0H-KxCXPdbknBrJIWL9PTRVWyJrZZXnGbc4_144La6G0wh6dRG8vO8lUwwPugmORVhw&usqp=CAU"
              alt="PayPal Logo"
            />
          </Flex>
        </Flex>
        <Flex w="100%" h="45px" mt="30px" padding="0">
          <HStack spacing={35} w="700px">
            {FooterLinksUp.map((link) => (
              <Text
                key={link.text}
                fontSize="14px"
                color="#001c64"
                fontFamily="PayPalOpen-Bold,Helvetica Neue,Arial,sans-serif"
                fontWeight="bold"
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
              >
                {link.text}
              </Text>
            ))}
          </HStack>
          <Flex padding="2px" ml="auto" p="1px">
            <Image
              ml="auto"
              cursor="pointer"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAtFBMVEX///+/CjAAKGi/BC69ACHel6G9ACPZh5PEMUe9ACXVdoTIS1y+ACoAJmcAIWVJWIIAAFoAGWIAHGPIBioAH2QAAFcAF2EAAFwAFGAAC14ACV0ADl4AAFLu8PQAAE/19/mOl7Dk5+2DjagsQndzf58dOHHX2+O8wtCEjqlCVIKXn7bHzNjb3+erssSSm7MnPnVebJIQMG1RYYpseZq0usqhqb42SnxwfJ1ZaI/FABrNM0bSTlwEqZ0nAAAMQklEQVR4nO2d6ZKjOBaF7zDds0spaFZjksUYL3jDGDt75v3fa7Ri4a7MnmY6ymFa50dFyJ8zKzglIelyUIH1RP30p1cVGNvGyNg2Ssa2UdJtcwbX5A4v8QEivYXcL75qfQ4nYZtf6pfk3oZXO4Ql1nxDuHQ//apl3YbQn5Zt+JoQ7fqCqtUuF5+HMD9p0D3lgQZJcsYabKshvN7hy9uGbJts4RjaoqM4tj+DlWfbWME9NHcYYrhQiCT0LoA12MCeSIgpXMHMv8MjbBV8fdvQdbsuclgVWcaMcous6ACK9YH1Gw4TuBTZWsE9pBRu6NWjzWFdpLCnH7L+h9dZcYGkWG+viPVRCgE6BbOsWEEu4QRss+w1cCUb5gw65qLZ2Qz6mYR8fKGFhFsO7a1o5QskRrpoZvwWZncSHjncSLi2p9HbLCvkTl2IuPEgj5mRbmYCxgt2vXsJsddxD2MJuVOdJyEdzsxDCWeblBnsIQkv3MNwKvc2y/IqekWFmuacE3PG6yHztLQVbNnFD2GrZk+7HELm6UlBnw5ZqHr48w+vKmUbWkLVwk5NelEN5QrUjIivULfQz4gzCmvYKLiBuoRadkw6A0Nbg5ou8RlWOtxBW8FSzgj+jy8rZZvddZ5v7Rbyilw6zMj6IkeT3229sNmpy0X5MiSHveyZ/v5AwmWu2HLXhN62kzC8rEm8yOVqBS12lu91ney2HryuVG9jNxwUHuXVLzHtLn7v03IAjz6F4QBi/9j/HjSA1D+MlwOofs8EbLOQ9ufws19C9Gutx+a34RRse4KmZdsnPe6bzS/hl79oarahRr9AZDWfQ6v5Eg6ceoCTs23WLxeY3HbtfAqdsvwCrvVawAOcnG2ogTetgBGvaq2AgY+gFTCoFboXdHV31GBQr2INvsEvutt0bIvJvID9O4lEASMg7wABIY6CB+jmJOItNyBzgDkJRJ+KyLyDw5wIqxxCAoB3EogSSkTe91AoODnb0ArYZihJK7bwwqc0pc00TcVYrAWEirvW0s85FGOxkrDmrpUcJml6YiWUZZUKuEKTtM0iB/7hPuDXZ4tKSLLhuwVERLGjIxz6otiRXH0BRbFjK2Aoih35kW8IULDn8EAGf9l0bLMIqyDtZcXCwu/sK6G6tXvM1E7txDG/bE/dznhd5KCgGzL4LiHymG/roWtTsi2oIYdcXR/dptPB1lc36DY9h52C7geDH8pTsqOw3+47LYNqu28R+ktBn1y4mT/9+VX1YBtC9LZe9tNleMkbvKsjCRtY0xlDbSnj1c6ydmq6REd6z1/302VU73CTq1oAnWRLOp2gh7l0Mrbh0zmy/IV6EuVkAUYkU1WgdhNb4bWVTTcLEAoyV8FraMUbBXFGEA4y2U/dcuFb0fmkrU+4bc+uNo7W4yDFvO7dr1Md1j+cAcRYh+hTaOmQP1fFD65NyLbvKmObsW0YPkD4C4jRWDg529xW356jzUb3zRlA/HZFA6hbg8+Lz+HkbEMehFrT77pBM9W3leF+qyU6EE5nmlHxJbM1aKUPq7YJ2YZsO/qA2+yeRZjnuZZpmLVwiiR0KUx2GvRKOMcytkChl1YaDArYUDgctxOxDS0P66KGqlgf2JoWt1lB91rrImuxhBXUxTpj+3z3xmFRZHy3fuwhq1y6ZVZkAKWEVwp3HA5rvBOxTTxVZuIlD2TVolXzq+VPlZn4/Q01Q1hKeBKwEq0V7212IVrpaXh/+/kvr6qHe5vjMDN2jbgrIcLNKERVw7IRM6OyFORmlApaO+ahXOEiXhKAVu5fw4aVUmp7GHyz//qyepwSIlbHWKm7N+J1jKWaS2esjnFRRQ5kMdjnKoMVbXVy+2rhBYN9yYOwf43tsEo5qQpImrYJyB7EgkhdBwc5XaIAEgblV/0DdPs+PcRhmioYdrC9QP+oIYK8hWSyhSP8UblhVKutfFy3QXCqZBfCbR2Hfq1263F1CkhbyS7klvUsdCsVG4l3Z0JutYROsQpCVG2GS+fp2IYWdOmFZmqhipa0uzjLRodRv4oVsP/JyNJg01Dn7Tuk/qF4MVx/TMe2/yG28HvAydn2PTUt235jJGE8nJRtaDm4wC8jCcPWb4GTsy1aeVrLKQt9jRrXAzjMK0SDvIKdDWrgkXoiMU3bUDPIK8Qr3Qt0hMUgzLDSvMBvoHfUoLroYYYz/GKYTsY2xMMMLK8gihw8zODJvALiYYbtnMQcOoMwA4rIfAvrPswQkABSLcww30M5J+Hgb5uKbXR7niY8hFA1vMiRJAltJSlb/nJIt+NJWjPolKmEbKDKvAKD3LVCQVEeUXCiYQYUiEjCXtQbfRFJUGGGmYgkdCLpEL6lHMoww+yiw/gs4EKEGWIBt8NKJf73315Vj7uEb+UVZirozfMK6t0My5nRVup9O6/gYAbn6kY4Z74VD3vS6TxeZnmF5J5XoDdyKj2vkNzzCu4JaJd60/IKyT2vwMIMcJ9cvITBx2DgVMqUbB49vK+1vEK+bHItr5C9Z31eIa7zZpmo6RJfoXjf9nmFWb3Dx2SvwgwbKN87eKiJT8c23J4jK772YYYtwYgc9DBD/NbnFQ4EYbKVX3Vv19Cafci1GkIMzrYqzFBQSE4f0w4z4H4Ry5+22EPYX7tt6dDF6g/u21dwerZ9VxnbjG0mzPDr+tUww1WP2/8izLAxYQbpk5fqh3zY272+kQzTSINhNwgzOGmgw8v6jxJmsBwnPkMbOWKFhR3H2+We44gNOYUnOMWO6HAM5jsNRi2cdZhUGpwVcA2dh4NVfv77q2poW1OUbQ1VW67FewlFeQMoy0JsyNcM1gwyY9qiLIewYrBoOKSfA9AWW6qhRcHg6ibg/d/oHy+rhzCDyisUbHz1eQX+cod4C55JJB2WMq/A6yF9XgFuHB53OlRHO8AwzDCZCohlY2bGbinuZ8jjZqxVXqFhZlSNLyHPK5RyZ+8vWV6hwjLpwEsCcJM/Kc59qN3hIJ2ObSLMcBmGGfqyLD+PYq825LhhUJ0g880wQz9FTD3MQNK0TPrLpUPvsu/DDBaBtEz1MMN+GGYoB2GG7gLqOQS1PykheZhLp2MbPu+cML6HGaobCdqd7F+4reLQ74+MinangJQq6SDCDDu1W492HxTewwx1EKJ8wmGGmOUV+kgue9XMvocZGIx7yMIM9rH/yQjpeQUBUQ9NmOH/h5Oz7XtqIrb9hiMZfhc4DdsejmRoBvfvR/hFUOEB4k/hJGxDvv4U3fK7wQ0cXQY7+r3+/B0th9v9y+AHF5223bfii9/TSdjmtqAXMEiiv43hlKCHP7y00KBdpAMI+jEXdqZnT+nq7l5Aen3bkEfeV3D2SMidswPvCJXKImBC3mvYeDKL4BPvCnUPAwavHhF9KiTehkHSwwqOXiCeMlN4htU7Uafg/eefryp1NmWe5DxucGHFNrvjmYY84Wea4o2Ce9ZRHAX56vUOO9bF3P0AnhMFqW/IvSiozqb816tK9jbsiGLHQey9xfsIdEvPR5uLRLFjLQZxIGDV8NHmyjc3ykAMQnHIZSXe5HWWohJS8nGK5LkPtSNnm9cvU6I58+2mdo3xlbZylUUQ8EPt4eM3Zsxc7QDmzLc3NZ3MPpgxCuI5K32oYyyt4KbDCdhG9/CQQj+X+hnLIvQPUWZ0pEH/ql+4ZVCVPpDN4LaHHYPKYYQZzNRcGl9oq9/uT8A2/AE37wLqzcYgr6JzX92gk2zrrfqHASSpg49+uqST7EdQ99NlkK68tp8u7TWco0odAo1mcPFu0D+cf33bnPXRt0ghn0ShZUaQYx2kbU62tBEp5I0cHSm0G3XqgpM1FGZy146uBYVLBe2D5VAoV3loUxDLP/ZndL2+bfIMBjUqeRYB2Z/A4akLX0KRhvgETsC2Z8jYZmwztv26AD9RL7xLeHueNi+8JzUyMjIyMjIyMjIyMjIyepaenbl+TcGzE/6vKXh2we81ZWwbJWPbKBnbRsnYNkrGtlEyto2SsW2UjG2jBM8+Leg1Bc8+m+o19exKgpGRkZGRkZGRkZGRkdEfWM/+H6NeU/Ds/5/sNWXKlKNkbBslY9soGdtGydg2Ssa2UTK2jZKxbZSMbaNkHi+PkrFtlJ5dSTAyMjIyMjIyMjIyMjL6A+tHoxGCH4xGyJQpR8nYNkrGtlEyto2SsW2UjG2jZGwbJWPbKBnbRsnYNkrGtlH6LymsWM9x0zMtAAAAAElFTkSuQmCC"
              w="24px"
              h="18px"
              brightness="70%"
            />
            <UsaIcon />
          </Flex>
        </Flex>
        <Divider orientation="horizontal" border=".5x solid grey" />
        {/* Under Divider */}
        <Flex w="100%" h="45px" mb="auto" ml="auto">
          <HStack spacing={35} w="700px">
            {FooterLinksDown.map((link) => (
              <Text
                fontSize="14px"
                color="#001c64"
                fontFamily="PayPalOpen-Bold,Helvetica Neue,Arial,sans-serif"
                fontWeight="bold"
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
              >
                {link.text}
              </Text>
            ))}

            {/* Righ side */}
          </HStack>
          <Flex padding="2px" ml="auto" p="1px">
            <Text
              fontSize="14px"
              color="#001c64"
              fontFamily="PayPalOpen-Regular,Helvetica"
              mr="15px"
            >
              © 1999–2023
            </Text>
            <Text
              fontSize="14px"
              color="#001c64"
              fontFamily="PayPalOpen-Bold,Helvetica Neue,Arial,sans-serif"
              fontWeight="bold"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
              mr="15px"
            >
              Accessibility
            </Text>
            <Text
              fontSize="14px"
              color="#001c64"
              fontFamily="PayPalOpen-Bold,Helvetica Neue,Arial,sans-serif"
              fontWeight="bold"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
              mr="15px"
            >
              Privacy
            </Text>
            <Text
              fontSize="14px"
              color="#001c64"
              fontFamily="PayPalOpen-Bold,Helvetica Neue,Arial,sans-serif"
              fontWeight="bold"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
              mr="15px"
            >
              Cookies
            </Text>
            <Text
              fontSize="14px"
              color="#001c64"
              fontFamily="PayPalOpen-Bold,Helvetica Neue,Arial,sans-serif"
              fontWeight="bold"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Legal
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
