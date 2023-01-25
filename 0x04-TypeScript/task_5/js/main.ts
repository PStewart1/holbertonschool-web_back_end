interface MajorCredits {
    credits: number;
    brand: 'majorCredits';
}

interface MinorCredits {
    credits: number;
    brand: 'minorCredits';
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
    const sum: MajorCredits = {
        credits: subject1 + subject2,
        brand: 'majorCredits',
    };
    return sum;
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
    const sum: MinorCredits = {
        credits: subject1 + subject2,
        brand: 'minorCredits',
    };
    return sum;
}
