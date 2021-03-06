import React from "react"
import { DuetInput, DuetCheckbox } from "@duetds/react"

export default function InvestmentOrigin({ value, onChange }) {
  const [hasExtras, setHasExtras] = React.useState(false)

  function handleAssetOriginChange(e) {
    onChange({
      ...value,
      [e.target.name]: e.detail.checked
    })
  }

  function handleExtraDetailsChange(e) {
    onChange({
      ...value,
      extras: e.detail.value
    })
  }

  function handleExtrasChange(e) {
    setHasExtras(e.target.checked)

    if (!e.target.checked) {
      onChange({
        ...value,
        extras: ""
      })
    }
  }

  return (
    <div>
      <DuetCheckbox
        name="salary"
        checked={value.salary}
        onDuetChange={handleAssetOriginChange}
        label="Palkka- tai eläketulo"
      ></DuetCheckbox>
      <DuetCheckbox
        name="gift"
        checked={value.gift}
        onDuetChange={handleAssetOriginChange}
        label="Lahja"
      ></DuetCheckbox>
      <DuetCheckbox
        name="heritage"
        checked={value.heritage}
        onDuetChange={handleAssetOriginChange}
        label="Perintö"
      ></DuetCheckbox>
      <DuetCheckbox
        name="entrepreneurialIncome"
        checked={value.entrepreneurialIncome}
        onDuetChange={handleAssetOriginChange}
        label="Yrittäjätulo"
      ></DuetCheckbox>
      <DuetCheckbox
        name="assets"
        checked={value.assets}
        onDuetChange={handleAssetOriginChange}
        label="Omaisuuden myynnistä saadut varat"
      ></DuetCheckbox>
      <DuetCheckbox
        name="otherIncome"
        checked={value.otherIncome}
        onDuetChange={handleAssetOriginChange}
        label="Muu työsuhteesta saatu tulo, kuten optio tai bonukset"
      ></DuetCheckbox>
      <DuetCheckbox
        name="investment"
        checked={value.investment}
        onDuetChange={handleAssetOriginChange}
        label="Sijoitustoiminnan tuotot"
      ></DuetCheckbox>

      <DuetCheckbox
        name="extras"
        checked={hasExtras}
        onDuetChange={handleExtrasChange}
        label="Muu, mikä?"
      ></DuetCheckbox>
      {hasExtras && (
        <div>
          <DuetInput
            value={value.extras}
            onDuetChange={handleExtraDetailsChange}
            label="Kerro sijoitettavien varojen muu alkuperä"
            labelHidden
          ></DuetInput>
        </div>
      )}
    </div>
  )
}
