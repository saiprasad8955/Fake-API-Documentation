// api/countries/label

//  METHOD: POST
//  post : { label: string }

import { countryList } from "@doubco/countries"

export default eventHandler(async (event) => {
    const body = await readBody(event);
    const { label } = body;
    if (!label) {
        return {
            status: 400,
            message: "Country label name is required!"
        }
    }
    return {
        countries: countryList.filter((countryObj) => countryObj.label.includes(label)),
    };
})