export const dateStringToDate = (dateString: string): Date => {
    const dateData = dateString.split('/');
    return new Date(parseInt(dateData[2]), parseInt(dateData[1]), parseInt(dateData[0]));
};
