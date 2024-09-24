import { countryList } from "@doubco/countries"

export default eventHandler(() => {
    return {
        countries: countryList
    }
});