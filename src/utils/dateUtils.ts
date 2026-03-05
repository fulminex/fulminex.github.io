import { careerStart } from '../data/mockData';

/**
 * Calcula los años de experiencia desde una fecha de inicio (septiembre de 2017 por defecto).
 * @returns El número total de años cumplidos hasta hoy.
 */
export const calculateYearsOfExperience = (
    startYear = careerStart.year,
    startMonth = careerStart.month
): number => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    // Si el mes actual es anterior al mes de inicio, restamos un año.
    // getMonth() es 0-indexed (Enero = 0, Septiembre = 8).
    const subtractYear = currentMonth < startMonth ? 1 : 0;

    return currentYear - startYear - subtractYear;
};
