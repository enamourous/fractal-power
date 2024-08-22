function power(a, b) {
    return b===1 ? a : a * power(a, b-1);
}

function fractal(pic, n) {
    
    return n === 1 ? pic : beside(pic, fractal(stack(pic, pic), n - 1))
    
    return n===1 ? pic : 
        beside_frac(1 - 1/power(2, n), fractal(pic, n-1), stackn(power(2, n-1), pic));
}
// Test
show(fractal(make_cross(rcross), 5));