export const toNumberOrNull = (v: unknown): number | null => {
    if (v === null || v === undefined) return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
};


export const numberFormatter = new Intl.NumberFormat('en-US');