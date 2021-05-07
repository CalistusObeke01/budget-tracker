export const convertCurr = (amount) => new Intl.NumberFormat('nigeria', {style: 'currency', currency: 'NGN' , symbol: '₦' }).format(amount);
