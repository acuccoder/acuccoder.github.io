// Just the Bulma example notification JS code
// Somehow, I found this useful

document.addEventListener("DOMContentLoaded", () => {
    (document.querySelectorAll(".notification .delete") || []).forEach(
        ($delete) => {
            const $notification = $delete.parentNode;

            $delete.addEventListener("click", () => {
                $notification.parentNode.removeChild($notification);
            });
        }
    );
});