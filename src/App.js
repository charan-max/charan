import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {
  DuetLayout,
  DuetHeading,
  DuetParagraph,
  DuetSpacer,
  DuetStepper,
  DuetStep,
  DuetButton,
  DuetModal
} from "@duetds/react"
import InvestmentAmount from "./components/InvestmentAmount"
import InvestmentOrigin from "./components/InvestmentOrigin"
import Summary from "./components/Summary"

const agreementOptions = {
  1: { label: "LähiTapiola Sijoitusvakuutus 390-2509251-K", price: 2500 },
  2: { label: "LähiTapiola Sijoitusvakuutus 390-2480957-V", price: 1000 }
}

const formatter = new Intl.NumberFormat("fi-FI", { style: "currency", currency: "EUR" })

function App() {
  const [currentStep, setCurrentStep] = React.useState(0)
  const [formData, setFormData] = React.useState({
    investmentAmount: {
      agreement: "",
      additionalInvestment: 50
    },
    investmentOrigin: {
      salary: false,
      gift: false,
      heritage: false,
      entrepreneurialIncome: false,
      assets: false,
      otherIncome: false,
      investment: false,
      extras: ""
    }
  })
  const [complete, setComplete] = React.useState(false)

  function handleInvestmentAmountChange(investmentAmount) {
    setFormData(data => ({
      ...data,
      investmentAmount
    }))
  }

  function handleInvestmentOriginChange(investmentOrigin) {
    setFormData(data => ({
      ...data,
      investmentOrigin
    }))
  }

  function handleNextClick() {
    setCurrentStep(step => step + 1)
  }

  React.useEffect(() => {
    if (window.innerWidth > 992) {
      window.scrollTo(0, 160)
    } else {
      window.scrollTo(0, 110)
    }
  }, [currentStep])

  return (
    <>
      <Header />
      <DuetLayout center>
        <div slot="top" role="region">
          <DuetSpacer breakpoint="large" size="x-large" />
          <DuetHeading level="h1" visual-level="h2">
            Tee uusi lisäsijoitus
          </DuetHeading>
          <DuetSpacer />
        </div>
        <div slot="main">
          <DuetStepper selected={currentStep} onDuetStepChange={e => setCurrentStep(e.detail.toStep)}>
            <DuetStep heading="Syötä lisäsijoituksen määrä">
              <DuetParagraph>
                Voit tehdä lisäsijoituksen Sijoitusvakuutukseesi voimassa olevan sijoitussuunnitelmasi mukaisesti. Voit
                sijoittaa 50&nbsp;€&thinsp;–&thinsp;10&nbsp;000&nbsp;€ kerralla. Jos haluat tehdä muutoksia
                vakuutukseesi tai tehdä yli 10&nbsp;000&nbsp;€ sijoituksen, otathan yhteyttä säästämisen ja
                sijoittamisen palveluihin puhelimitse 09&nbsp;453&nbsp;8500.
              </DuetParagraph>
              <InvestmentAmount
                value={formData.investmentAmount}
                onChange={handleInvestmentAmountChange}
                agreementOptions={agreementOptions}
                formatter={formatter}
              />
              <DuetSpacer></DuetSpacer>
              <DuetButton
                disabled={!formData.investmentAmount.agreement}
                margin="none"
                variation="primary"
                onClick={handleNextClick}
              >
                Seuraava
              </DuetButton>
            </DuetStep>
            <DuetStep heading="Sijoitettavien varojen alkuperä">
              <DuetParagraph>
                LähiTapiola Henkiyhtiöllä on lakisääteinen velvollisuus tunnistaa ja tuntea asiakkaansa. Käytämme
                tietoja täyttääksemme velvoitteemme rahanpesun ja terrorismin rahoittamisen estämisessä. Täytäthän
                pyydetyt tiedot huolellisesti.
              </DuetParagraph>
              <InvestmentOrigin value={formData.investmentOrigin} onChange={handleInvestmentOriginChange} />
              <DuetSpacer></DuetSpacer>
              <DuetButton margin="none" variation="primary" onClick={handleNextClick}>
                Seuraava
              </DuetButton>
            </DuetStep>
            <DuetStep heading="Yhteenveto ja maksu">
              <DuetSpacer></DuetSpacer>
              <Summary agreement={agreementOptions[formData.investmentAmount.agreement]} formatter={formatter} />
              <DuetSpacer></DuetSpacer>
              <DuetButton margin="none" variation="primary" expand onClick={() => setComplete(true)}>
                Siirry verkkopankkiin
              </DuetButton>
            </DuetStep>
          </DuetStepper>
        </div>
      </DuetLayout>
      <Footer />
      <DuetModal icon="messaging-success" heading="Onko matkapuhelimesi tai tablettisi rikkoutunut?" active={complete}>
        <pre>{JSON.stringify(formData, null, "  ")}</pre>
      </DuetModal>
    </>
  )
}

export default App
