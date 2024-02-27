// http://paulbourke.net/miscellaneous/interpolation/

export function linear(y1, y2, mu) {
    return(y1*(1-mu)+y2*mu);
}

export function cosine(y1, y2, mu) {
    const mu2 = (1-Math.cos(mu*Math.PI))/2;
    return(y1*(1-mu2)+y2*mu2);
}

export function cubic(y0, y1, y2, y3, mu) {
    let mu2 = mu*mu;
    let a0 = y3 - y2 - y0 + y1;
    let a1 = y0 - y1 - a0;
    let a2 = y2 - y0;
    let a3 = y1;                
    return (a0 * mu * mu2) + (a1 * mu2) + (a2 * mu) + a3;
}

export function catmullRom(y0, y1, y2, y3, mu) {
    let mu2 = mu*mu;
    let a0 = -0.5*y0 + 1.5*y1 - 1.5*y2 + 0.5*y3;
    let a1 = y0 - 2.5*y1 + 2*y2 - 0.5*y3;
    let a2 = -0.5*y0 + 0.5*y2;
    let a3 = y1;
    return (a0 * mu * mu2) + (a1 * mu2) + (a2 * mu) + a3;
}

export function hermite(y0, y1, y2, y3, mu, tension = 0.5, bias = 0) {
    let mu2 = mu * mu;
    let mu3 = mu2 * mu;
    let m0  = (y1-y0)*(1+bias)*(1-tension)/2;
    m0 += (y2-y1)*(1-bias)*(1-tension)/2;
    let m1  = (y2-y1)*(1+bias)*(1-tension)/2;
    m1 += (y3-y2)*(1-bias)*(1-tension)/2;
    let a0 =  2*mu3 - 3*mu2 + 1;
    let a1 =    mu3 - 2*mu2 + mu;
    let a2 =    mu3 -   mu2;
    let a3 = -2*mu3 + 3*mu2;

    return(a0*y1+a1*m0+a2*m1+a3*y2);
}