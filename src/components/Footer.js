import React from "react"
import { DuetFooter } from "@duetds/react"

const menu = [
  {
    label: "Turvallisuus ja käyttöehdot",
    href: "https://www.lahitapiola.fi/henkilo/asiakaspalvelu/asioi-verkossa/hyva-tietaa/verkkoturvallisuus",
    external: "true"
  },
  {
    label: "Evästeet",
    href:
      "https://www.lahitapiola.fi/henkilo/asiakaspalvelu/asioi-verkossa/hyva-tietaa/henkilotietojen-kasittely/evasteet",
    external: "true"
  },
  {
    label: "Henkilötietojen käsittely",
    href: "https://www.lahitapiola.fi/henkilo/asiakaspalvelu/asioi-verkossa/hyva-tietaa/henkilotietojen-kasittely",
    external: "true"
  }
]

export default function Footer() {
  return <DuetFooter variation="simple" menu={menu}></DuetFooter>
}
