define(
    [
        'Magento_Checkout/js/view/summary/abstract-total',
        'Magento_Checkout/js/model/quote',
		'Magento_Customer/js/model/customer',
    ],
    function(
        Component,
        quote,
    ) {
        'use strict';
        return Component.extend({
             defaults: {
                template: 'Adam_Checkout/message'
            },
                    /**
         * @return {*}
         */
            isDisplayed: function () {
                return this.isFullMode();
            },

            /**
             * Get pure value.
             */
            getPureValue: function () {
                var totals = quote.getTotals()();
            
                if (totals) {
                    return totals['grand_total'];
                }

                return quote['grand_total'];
            },

            /**
             * @return {*|String}
             */
            getValue: function () {
                console.log(quote.getItems())
                return this.getFormattedPrice(this.getPureValue());
            }
        });
    }
);
