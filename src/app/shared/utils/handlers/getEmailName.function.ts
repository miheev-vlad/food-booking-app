export const getEmailName = (emailStr: string): string => {
  return emailStr.toLowerCase().split('@')[0];
};
