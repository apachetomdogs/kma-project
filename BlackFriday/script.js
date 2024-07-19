document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const closePopup = document.getElementById('closePopup');

    function showPopup(type) {
        switch (type) {
            case 'more-products':
                popupMessage.textContent = "더 많은 상품을 보여드릴게요 :)";
                break;
            case 'out-of-stock':
                popupMessage.textContent = "품절! :( 하지만 다른 제품이 더 있어요! 둘러 보시겠어요?";
                break;
            case 'added-to-cart':
                popupMessage.textContent = "장바구니에 성공적으로 담겼습니다 :) 다른 제품도 더 둘러보시겠습니까?";
                break;
            default:
                popupMessage.textContent = "알 수 없는 요청입니다.";
                break;
        }
        popup.style.display = 'flex';
    }

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.showPopup = showPopup; // 전역 함수로 설정하여 HTML에서 사용 가능하도록 함
});
