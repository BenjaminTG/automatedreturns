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
        // throw new Error({status:404, data:"Text", statusText: "Not found"})
        // Create a phony JSON response for now
        let response = {
            status: 200, 
            statusText: "OK",
            data: {
                "order_id": "12345", 
                "order_created_at": "2020-07-03T02:34:55.523+00:00",
                "return_possible": true,
                "validation_errors": [],
                "items": [
                    {
                        "level_code": "ABCD_1234",
                        "name": "Foo Shoe",
                        "size": "12E",
                        "color": "Fail Army Red",
                        "image": "http://lorempixel.com/200/400/animals",
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
                        ],
                        "reasons": {
                            "return": [
                                {
                                    "reason_code": "FAULTY",
                                    "allowed": true,
                                    "validation_errors": []
                                },
                                {
                                    "reason_code": "WRONG_COLOUR",
                                    "allowed": true,
                                    "validation_errors": []
                                },
                                {
                                    "reason_code": "WRONG_ITEM",
                                    "allowed": true,
                                    "validation_errors": []
                                },
                                {
                                    "reason_code": "SIZE_TOO_SMALL",
                                    "allowed": false,
                                    "validation_errors": ["ORDER:AGE_LIMIT_EXCEEDED"]
                                },
                                {
                                    "reason_code": "SIZE_TOO_BIG",
                                    "allowed": false,
                                    "validation_errors": ["ORDER:AGE_LIMIT_EXCEEDED"]
                                },
                                {
                                    "reason_code": "CHANGE_OF_MIND",
                                    "allowed": false,
                                    "validation_errors": ["ORDER:AGE_LIMIT_EXCEEDED"]
                                }
                            ],
                            "exchange": [
                            ]
                        }
                        
                    },
                    {
                        "level_code": "EFGH_5392",
                        "name": "Nue Shue",
                        "size": "10D",
                        "color": "Mistake Maroon",
                        "image": "http://lorempixel.com/200/400/animals",
                        "unit_price": "40.00",
                        "quantity_total": 1,
                        "quantity_return_allowed": 0,
                        "variants": [
                            { "level_code": "EFGH_5392", "size": "10D" },
                        ],
                        "validation_errors": [
                            "Sale items are not eligible to be returned."
                        ],
                        "reasons": {
                            "return": [
                                {
                                    "reason_code": "FAULTY",
                                    "allowed": true,
                                    "validation_errors": []
                                },
                                {
                                    "reason_code": "WRONG_COLOUR",
                                    "allowed": true,
                                    "validation_errors": []
                                },
                                {
                                    "reason_code": "WRONG_ITEM",
                                    "allowed": true,
                                    "validation_errors": []
                                },
                                {
                                    "reason_code": "SIZE_TOO_SMALL",
                                    "allowed": false,
                                    "validation_errors": ["ORDER:AGE_LIMIT_EXCEEDED"]
                                },
                                {
                                    "reason_code": "SIZE_TOO_BIG",
                                    "allowed": false,
                                    "validation_errors": ["ORDER:AGE_LIMIT_EXCEEDED"]
                                },
                                {
                                    "reason_code": "CHANGE_OF_MIND",
                                    "allowed": false,
                                    "validation_errors": ["ORDER:AGE_LIMIT_EXCEEDED"]
                                }
                            ],
                            "exchange": [
                            ]
                        }
                    }
                ]
            }
        };

        return response;

    }

    async getReturnStatus(orderId, emailAddress) {

        await new Promise((resolve, reject) => {setTimeout(() => resolve(), 500);});
        
        let response = {
            data: {
                "exos": [{
                    "reference_id": "b5dfff04-258b-4f45-a752-2939ca2fff30",
                    "created_at": 1587132745,
                    "updated_at": 1587342761,
                    "customer_message": "RETURN-REQUEST:AWAITING-RETURN",
                    "items": [{
                        "level_code": "ABC_1234",
                        "name": "Rainbow Shoes",
                        "size": "Age Group Adult,ApproxAge ,CM 25.4,EURO 41,WOMENS UK ,WOMENS US ,MENS UK 7,MENS US 8,KIDS UK ,KIDS US ",
                        "colour": "Rainbow",
                        "image_url": "https://res.cloudinary.com/brandcollective-ap21/image/upload/v1563954927/106380-21835/500703/BLK/28.jpg",
                        "unit_price": "-30.00",
                        "quantity": "-1.0",
                        "total_price": "-30.00"
                    }]
                }]
            }          
        }

        return response;
    }

}

export default ApiService
