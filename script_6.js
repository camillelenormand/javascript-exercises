// Liste des codons associés à chaque acide aminé:

// Sérine : UCU, UCC, UCA, UCG, AGU, AGC
// Proline : CCU, CCC, CCA, CCG
// Leucine : UUA, UUG
// Phénylalanine : UUU, UUC
// Arginine : CGU, CGC, CGA, CGG, AGA, AGG
// Tyrosine : UAU, UAC

// Voici 2 ARN à traduire en protéines :
// CCGUCGUUGCGCUACAGC
// CCUCGCCGGUACUUCUCG


const ARN1 = "CCGUCGUUGCGCUACAGC";
const ARN2 = "CCUCGCCGGUACUUCUCG";


const translate = (ARN) => {
  const codons = ARN.match(/.{1,3}/g);
  let protein = "";
  const aminoAcids = {
    UCU: "Sérine-",
    UCC: "Sérine-",
    UCA: "Sérine-",
    UCG: "Sérine-",
    AGU: "Sérine-",
    AGC: "Sérine-",
    CCU: "Proline-",
    CCC: "Proline-",
    CCA: "Proline-",
    CCG: "Proline-",
    UUA: "Leucine-",
    UUG: "Leucine-",
    UUU: "Phénylalanine-",
    UUC: "Phénylalanine-",
    CGU: "Arginine-",
    CGC: "Arginine-",
    CGA: "Arginine-",
    CGG: "Arginine-",
    AGA: "Arginine-",
    AGG: "Arginine-",
    UAU: "Tyrosine-",
    UAC: "Tyrosine-",
  };
  codons.forEach((codon) => {
    protein += aminoAcids[codon];
  });

  return protein.slice(0, -1);

}


console.log("ARN1 : " + ARN1);
console.log("Protéine : " + translate(ARN1));
console.log("ARN2 : " + ARN2);
console.log("Protéine : " + translate(ARN2));