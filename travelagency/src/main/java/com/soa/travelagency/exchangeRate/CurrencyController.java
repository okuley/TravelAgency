package com.soa.travelagency.exchangeRate;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(path = "/api/v1/exchangeRate")
public class CurrencyController {
@GetMapping
    public double getExchangeRate(@RequestParam("fromCur")String fromCur,
                          @RequestParam("toCur")String toCur) {

        double cRate=0.0;

        try {
            double rate1 = Currency.ExRate.valueOf(fromCur).rateInGBP;
            double rate2 = Currency.ExRate.valueOf(toCur).rateInGBP;
            cRate = rate1/rate2;
        }
        catch (IllegalArgumentException iae) {
            System.err.println(iae.toString());
        }

        /*String pattern = "dd-MM-yyyy HH:mm:ss";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

        String now = simpleDateFormat.format(new Date());*/
       // String stampedExRate = cRate ;

        return cRate;
    }
}
