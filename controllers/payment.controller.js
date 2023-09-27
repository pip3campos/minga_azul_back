import mercadopago from "mercadopago"

export const createOrder1 = async (req,res) => {

    mercadopago.configure({
        access_token: process.env.MERCADOPAGO_TOKEN
    })

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: 'Donate $2.500 CLP',
                unit_price: 2500,
                currency_id: "CLP",
                quantity: 1

            }
        ],
        back_urls: {
            success: 'http://localhost:4000/donate/success',
            failure: 'http://localhost:4000/donate/failure',
            pending: 'http://localhost:4000/donate/pending'
        },
        notification_url: `${process.env.NGROK_LINK}/donate/webhook`
    })

    console.log(result)

    res.send(result.body)
}

export const createOrder2 = async (req,res) => {

    mercadopago.configure({
        access_token: process.env.MERCADOPAGO_TOKEN
    })

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: 'Donate $12.500 CLP',
                unit_price: 12500,
                currency_id: "CLP",
                quantity: 1

            }
        ],
        back_urls: {
            success: 'http://localhost:4000/donate/success',
            failure: 'http://localhost:4000/donate/failure',
            pending: 'http://localhost:4000/donate/pending'
        },
        notification_url: `${process.env.NGROK_LINK}/donate/webhook`
    })

    console.log(result)

    res.send(result.body)
}

export const createOrder3 = async (req,res) => {

    mercadopago.configure({
        access_token: process.env.MERCADOPAGO_TOKEN
    })

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: 'Donate $25.000 CLP',
                unit_price: 25000,
                currency_id: "CLP",
                quantity: 1

            }
        ],
        back_urls: {
            success: 'http://localhost:4000/donate/success',
            failure: 'http://localhost:4000/donate/failure',
            pending: 'http://localhost:4000/donate/pending'
        },
        notification_url: `${process.env.NGROK_LINK}/donate/webhook`
    })

    console.log(result)

    res.send(result.body)
}

export const receiveWebhook = async (req,res) => {
    console.log(req.query)

    try {
        if (req.query.type == "payment") {
            const data = await mercadopago.payment.findById(req.query['data.id'])
            console.log(data)
        }
        res.sendStatus(204)        
    } catch (error) {
        console.log(error)
        return res.sendStatus(500).json({ error: error.message })
    }

}