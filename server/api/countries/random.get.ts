import { countryList, countries } from "@doubco/countries"

export default eventHandler(() => {
    const countriesArr = Object.values(countries)
    return {
        randomCountry: countriesArr[Math.floor(Math.random() * countryList.length)]
    }
});