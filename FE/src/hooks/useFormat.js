export function useFormat (){


    const formatCurrency = (price) => {
        const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
        return formattedPrice;
    }

    return {formatCurrency}
}