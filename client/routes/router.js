const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/register",  (req, res) => {

    const { email } = req.body;
    const { messege } = req.body;

    try {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: `Feedback from ${email}`,
            html: `<hr/> <p>${email}</p> <h1>${messege} <hr/></h2>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
});

router.post("/product",  (req, res) => {

    const { name, number, emailCart, address, cartProduct, allPrice } = req.body;

    
    try {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: emailCart,
            subject: `❤️😁 Your order in Tammy Food 😁❤️`,
            html: `
            <div style="width: 100%; height: 250px; background-color: #FCC647; display: grid; padding-bottom: 20px; ">
            <img style="width: 200px; height: 40px; margin: auto;" src="https://i.ibb.co/26BD5Pk/Tammy-Food.png" alt="logo" />
            </div>
            <h2>Hello ${name} this your order, we send this in your address: ${address}</h2>
            <br />
            <hr/> ${cartProduct.map((product) => `<div style="width: 100%; height: auto; padding: 20px 0; display: flex; align-items: center; justify-content: space-between">
            <img style="width: 150px; height: 150px;" src=${product.url} alt=${product.name} />
            <div style="margin-left: 100px;">
            <h1>${product.name} : ${product.price}$ </h1>
            <h1>Count: ${product.count}</h1>
            </div>
            </div>
            <hr/>
            `).join('')}
            <h1 style="color: #FCC647">The amount order: ${allPrice}$ </h1>`


        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
});


module.exports = router;