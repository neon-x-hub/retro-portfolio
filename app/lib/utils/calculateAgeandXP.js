export default function calculateAgeAndXP(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);

    // Calculate age in years
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (month < birthDate.getMonth() || (month === birthDate.getMonth() && day < birthDate.getDate())) {
      age--;
    }

    // Calculate months and days since last birthday
    let months = today.getMonth() - birthDate.getMonth();
    if (months < 0) months += 12;

    let days = today.getDate() - birthDate.getDate();
    if (days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      days += lastMonth.getDate();
    }

    // Normalize the remaining months and days to XP (100 points scale)
    const totalDaysInNextYear = 365;  // Approximate total days in a year
    const daysInMonth = 30.44;  // Average days in a month (rough estimate)

    // Calculate total remaining days in this year
    const remainingDays = (months * daysInMonth) + days;

    // Normalize XP to a scale of 100 (remaining time out of the total year)
    const xp = Math.min((remainingDays / totalDaysInNextYear) * 100, 100);

    return {
      lvl: age,
      xp: xp.toFixed(0)
    };
  }
