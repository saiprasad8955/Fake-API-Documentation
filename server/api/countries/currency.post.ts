// api/countries/currency

//  METHOD: POST
//  post : { currency: string }

import { countries } from "@doubco/countries"

export default eventHandler(async (event) => {
    const body = await readBody(event);
    const { currency } = body;
    if (!currency) {
        return {
            status: 400,
            message: "Country currency  is required!"
        }
    };
    const countriesArr = Object.values(countries)

    return {
        countries: countriesArr.filter((countryObj) => {
            if (countryObj.currency) {
                return countryObj.currency.includes(currency)
            }
        }),
    };
})