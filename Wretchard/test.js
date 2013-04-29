var TheInvoice=ds.IdeasInvoice('E686F07543E90B47B55E7B33BF0A0AD2')
var TheProduct=ds.IdeasCatering('9B55A4048EC2B742B77C6E37FBC4DB96')
TheInvoice.product=TheProduct;
TheInvoice.save();
TheInvoice.product;
