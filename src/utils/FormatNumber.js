const FormatNumber = ( {number} ) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'ARS' }).format(number)
}

export default FormatNumber;