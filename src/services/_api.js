import axios from 'axios';

class ApiService {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    
    async getOrderForReturn(orderId, emailAddress) {
        // TODO: Implement a real request/response
        // let response = await axios.get(
        //   "/some/url/to/get/order/details",
        //   {
        //       data: { "order_id": orderId, "email_address": emailAddress }
        //   }
        // );

        // Wait for 500ms
        await new Promise((resolve, reject) => {setTimeout(() => resolve(), 500);});
        
        // Create a phony JSON response for now
        let response = {
            status: 200, 
            statusText: "OK",
            data: {
                "return_possible": true,
                "validation_errors": [],
                "items": [
                    {
                        "level_code": "ABCD_1234",
                        "name": "Foo Shoe",
                        "size": "12E",
                        "color": "Fail Army Red",
                        "image": "https://site.com/images/foo",
                        "unit_price": "55.95",
                        "quantity_total": 3,
                        "quantity_return_allowed": 1,
                        "variants": [
                            { "level_code": "ABCD_1233", "size": "12D" },
                            { "level_code": "ABCD_1234", "size": "12E" },
                            { "level_code": "ABCD_1235", "size": "12F" },
                        ],
                        "validation_errors": [
                            "Some of these items have already been returned."
                        ]
                    },
                    {
                        "level_code": "EFGH_5392",
                        "name": "Nue Shue",
                        "size": "10D",
                        "color": "Mistake Maroon",
                        "image": "https://site.com/images/nue",
                        "unit_price": "40.00",
                        "quantity_total": 1,
                        "quantity_return_allowed": 0,
                        "variants": [
                            { "level_code": "EFGH_5392", "size": "10D" },
                        ],
                        "validation_errors": [
                            "Sale items are not eligible to be returned."
                        ]
                    }
                ]
            }
        };

        return response;

    }

}

export default ApiService
