// api/countries/capital

//  METHOD: POST
//  post : { capital: string }

import { countries } from "@doubco/countries"

export default eventHandler(async (event) => {
    const body = await readBody(event);
    const { capital } = body;
    if (!capital) {
        return {
            status: 400,
            message: "Country capital  is required!"
        }
    };
    const countriesArr = Object.values(countries)

    return {
        countries: countriesArr.filter((countryObj) => {
            if (countryObj.capital) {
                return countryObj.capital.includes(capital)
            }
        }),
    };
})