/**
 * Geneartes notification box in order to notify users
 * @param {*} notificationHeader 
 * @param {*} notificationText 
 * @param {*} notificationType 
 * @returns 
 */
export const generateNotification = (notificationHeader, notificationText, notificationType) => {
    return `<div class="alert ${notificationType} alert-dismissible fade show" role="alert">
    <strong>${notificationHeader}</strong> ${notificationText}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
}
