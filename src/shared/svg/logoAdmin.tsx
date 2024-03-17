const Logo = () => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        columnGap: '16px'
    }}>
        <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5305 28.1092C17.8872 27.3411 15.848 20.3887 10.4823 20.3887H5.55566V22.3728C5.56279 24.1701 6.98202 25.6618 8.81952 25.8033C8.90746 25.8033 8.99467 25.8083 9.08333 25.8083H9.62912C15.7142 25.8083 16.1656 32.7862 22.6598 28.7356C22.7846 28.6605 22.8472 28.5168 22.8161 28.3771C22.8091 28.3426 22.7969 28.3094 22.7798 28.2786C22.7273 28.1882 22.6356 28.1259 22.5305 28.1092Z" fill="#ED1C23"/>
            <path d="M17.6729 0C19.498 0.15566 20.9007 1.64196 20.9084 3.42836V5.41253V5.41749V20.3852H22.9433C24.7904 20.3795 26.3235 18.992 26.4666 17.1964C26.4666 17.1142 26.4709 17.032 26.4709 16.9491V8.85577C26.472 7.18887 25.9871 5.55601 25.0727 4.14762C23.4643 1.65393 20.6923 0.100241 17.6729 0Z" fill="#FFCB03"/>
            <path d="M17.6517 0.000976562C17.5637 0.000976562 17.4736 0.000976562 17.3842 0.000976562H9.08541C4.17909 0.000976562 0.146327 3.84105 0.000976562 8.59101C0.152866 6.80429 1.68051 5.42735 3.5192 5.41988H20.9104V3.42863C20.9105 2.77718 20.7194 2.13933 20.3596 1.59044C19.7623 0.676046 18.7599 0.0876494 17.6517 0.000976563V0.000976562Z" fill="#3AB549"/>
            <path d="M0 8.60168C0 8.68742 0 8.77317 0 8.85962V16.9515C0.00910729 21.7355 3.90377 25.6525 8.80754 25.8094C7.70681 25.7185 6.71248 25.1324 6.11855 24.2242L6.09456 24.1859C6.07494 24.1554 6.05532 24.1243 6.03642 24.0931C6.01753 24.0619 6.00517 24.0378 5.98991 24.0102C5.97465 23.9825 5.96956 23.9754 5.96012 23.9577C5.93613 23.9124 5.91288 23.867 5.88744 23.821C5.67117 23.3695 5.55928 22.8772 5.55967 22.3789V5.41992H3.52476C1.6797 5.42455 0.146752 6.80833 0 8.60168Z" fill="#1C75BD"/>
            <path d="M22.9503 20.3906H16.9313C16.7881 20.3889 16.6587 20.4735 16.6058 20.6032C16.5135 20.82 16.6058 21.124 16.8325 21.4649C17.8165 22.953 21.2919 25.1434 22.7832 24.0627C23.2769 23.705 23.7324 23.2997 24.1429 22.8531L24.1473 22.8481L24.1684 22.8248C24.2934 22.6887 24.4133 22.5484 24.5317 22.4045L24.5441 22.3897C24.5819 22.3415 24.6168 22.2933 24.6575 22.2479L24.6705 22.2309C25.773 20.7943 26.3993 19.0636 26.4656 17.2705C26.2885 19.036 24.7696 20.3841 22.9503 20.3906Z" fill="#ED1C23"/>
        </svg>

        <svg width="147" height="18" viewBox="0 0 147 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.7207 12.7148V15H2.5625V12.7148H9.7207ZM3.50977 0.78125V15H0.580078V0.78125H3.50977ZM16.9277 12.6172V7.91016C16.9277 7.57161 16.8724 7.2819 16.7617 7.04102C16.651 6.79362 16.4785 6.60156 16.2441 6.46484C16.0163 6.32812 15.7201 6.25977 15.3555 6.25977C15.043 6.25977 14.7728 6.3151 14.5449 6.42578C14.3171 6.52995 14.1413 6.68294 14.0176 6.88477C13.8939 7.08008 13.832 7.3112 13.832 7.57812H11.0195C11.0195 7.12891 11.1237 6.70247 11.332 6.29883C11.5404 5.89518 11.8431 5.54036 12.2402 5.23438C12.6374 4.92188 13.1094 4.67773 13.6562 4.50195C14.2096 4.32617 14.8281 4.23828 15.5117 4.23828C16.332 4.23828 17.0612 4.375 17.6992 4.64844C18.3372 4.92188 18.8385 5.33203 19.2031 5.87891C19.5742 6.42578 19.7598 7.10938 19.7598 7.92969V12.4512C19.7598 13.0306 19.7956 13.5059 19.8672 13.877C19.9388 14.2415 20.043 14.5605 20.1797 14.834V15H17.3379C17.2012 14.7135 17.097 14.3555 17.0254 13.9258C16.9603 13.4896 16.9277 13.0534 16.9277 12.6172ZM17.2988 8.56445L17.3184 10.1562H15.7461C15.375 10.1562 15.0527 10.1986 14.7793 10.2832C14.5059 10.3678 14.2812 10.4883 14.1055 10.6445C13.9297 10.7943 13.7995 10.9701 13.7148 11.1719C13.6367 11.3737 13.5977 11.5951 13.5977 11.8359C13.5977 12.0768 13.653 12.2949 13.7637 12.4902C13.8743 12.679 14.0339 12.8288 14.2422 12.9395C14.4505 13.0436 14.6947 13.0957 14.9746 13.0957C15.3978 13.0957 15.7656 13.0111 16.0781 12.8418C16.3906 12.6725 16.6315 12.4642 16.8008 12.2168C16.9766 11.9694 17.0677 11.735 17.0742 11.5137L17.8164 12.7051C17.7122 12.972 17.569 13.2487 17.3867 13.5352C17.2109 13.8216 16.9863 14.0918 16.7129 14.3457C16.4395 14.5931 16.1107 14.7982 15.7266 14.9609C15.3424 15.1172 14.8867 15.1953 14.3594 15.1953C13.6888 15.1953 13.0801 15.0618 12.5332 14.7949C11.9928 14.5215 11.5632 14.1471 11.2441 13.6719C10.9316 13.1901 10.7754 12.6432 10.7754 12.0312C10.7754 11.4779 10.8796 10.9863 11.0879 10.5566C11.2962 10.127 11.6022 9.76562 12.0059 9.47266C12.416 9.17318 12.9271 8.94857 13.5391 8.79883C14.151 8.64258 14.8607 8.56445 15.668 8.56445H17.2988ZM21.9277 0H24.7402V12.5781L24.457 15H21.9277V0ZM31.4297 9.60938V9.81445C31.4297 10.6022 31.3451 11.3249 31.1758 11.9824C31.013 12.64 30.7591 13.2096 30.4141 13.6914C30.069 14.1667 29.6393 14.5378 29.125 14.8047C28.6172 15.0651 28.0182 15.1953 27.3281 15.1953C26.6836 15.1953 26.1237 15.0651 25.6484 14.8047C25.1797 14.5443 24.7858 14.1764 24.4668 13.7012C24.1478 13.2259 23.8906 12.6693 23.6953 12.0312C23.5 11.3932 23.3535 10.6966 23.2559 9.94141V9.49219C23.3535 8.73698 23.5 8.04036 23.6953 7.40234C23.8906 6.76432 24.1478 6.20768 24.4668 5.73242C24.7858 5.25716 25.1797 4.88932 25.6484 4.62891C26.1172 4.36849 26.6706 4.23828 27.3086 4.23828C28.0052 4.23828 28.6107 4.37174 29.125 4.63867C29.6458 4.89909 30.0755 5.27018 30.4141 5.75195C30.7591 6.22721 31.013 6.79362 31.1758 7.45117C31.3451 8.10221 31.4297 8.82161 31.4297 9.60938ZM28.6172 9.81445V9.60938C28.6172 9.17969 28.5846 8.77604 28.5195 8.39844C28.4609 8.01432 28.3568 7.67904 28.207 7.39258C28.0573 7.09961 27.8522 6.86849 27.5918 6.69922C27.3379 6.52995 27.0091 6.44531 26.6055 6.44531C26.2214 6.44531 25.8958 6.51042 25.6289 6.64062C25.362 6.77083 25.1406 6.95312 24.9648 7.1875C24.7956 7.42188 24.6686 7.70182 24.584 8.02734C24.4993 8.34635 24.4473 8.69792 24.4277 9.08203V10.3613C24.4473 10.8757 24.5319 11.3314 24.6816 11.7285C24.8379 12.1191 25.0723 12.4284 25.3848 12.6562C25.7038 12.8776 26.1172 12.9883 26.625 12.9883C27.0221 12.9883 27.3509 12.9102 27.6113 12.7539C27.8717 12.5977 28.0736 12.3763 28.2168 12.0898C28.3665 11.8034 28.4707 11.4681 28.5293 11.084C28.5879 10.6934 28.6172 10.2702 28.6172 9.81445ZM41.0781 12.8906L44.9258 15.9375L43.0801 17.5391L39.291 14.4922L41.0781 12.8906ZM45.0234 7.55859V8.23242C45.0234 9.31315 44.877 10.2832 44.584 11.1426C44.2975 12.002 43.8841 12.7344 43.3438 13.3398C42.8034 13.9388 42.1654 14.3978 41.4297 14.7168C40.694 15.0358 39.877 15.1953 38.9785 15.1953C38.0866 15.1953 37.2695 15.0358 36.5273 14.7168C35.7852 14.3978 35.1439 13.9388 34.6035 13.3398C34.0632 12.7344 33.6432 12.002 33.3438 11.1426C33.0508 10.2832 32.9043 9.31315 32.9043 8.23242V7.55859C32.9043 6.47135 33.0508 5.5013 33.3438 4.64844C33.6432 3.78906 34.0599 3.05664 34.5938 2.45117C35.1276 1.8457 35.7656 1.38346 36.5078 1.06445C37.25 0.745443 38.0671 0.585938 38.959 0.585938C39.8574 0.585938 40.6745 0.745443 41.4102 1.06445C42.1523 1.38346 42.7936 1.8457 43.334 2.45117C43.8743 3.05664 44.291 3.78906 44.584 4.64844C44.877 5.5013 45.0234 6.47135 45.0234 7.55859ZM42.0645 8.23242V7.53906C42.0645 6.78385 41.9928 6.11979 41.8496 5.54688C41.7129 4.97396 41.5111 4.49219 41.2441 4.10156C40.9837 3.71094 40.6615 3.41797 40.2773 3.22266C39.8932 3.02083 39.4538 2.91992 38.959 2.91992C38.4642 2.91992 38.0247 3.02083 37.6406 3.22266C37.2565 3.41797 36.9342 3.71094 36.6738 4.10156C36.4134 4.49219 36.2148 4.97396 36.0781 5.54688C35.9414 6.11979 35.873 6.78385 35.873 7.53906V8.23242C35.873 8.98112 35.9414 9.64518 36.0781 10.2246C36.2148 10.7975 36.4134 11.2826 36.6738 11.6797C36.9408 12.0703 37.2663 12.3665 37.6504 12.5684C38.041 12.7702 38.4837 12.8711 38.9785 12.8711C39.4733 12.8711 39.9095 12.7702 40.2871 12.5684C40.6712 12.3665 40.9935 12.0703 41.2539 11.6797C41.5208 11.2826 41.7227 10.7975 41.8594 10.2246C41.9961 9.64518 42.0645 8.98112 42.0645 8.23242ZM56.4883 15H53.3926L53.4121 12.7148H56.4883C57.2565 12.7148 57.9043 12.5423 58.4316 12.1973C58.959 11.8457 59.3561 11.3346 59.623 10.6641C59.8965 9.99349 60.0332 9.18294 60.0332 8.23242V7.53906C60.0332 6.8099 59.9551 6.16862 59.7988 5.61523C59.6491 5.06185 59.4245 4.59635 59.125 4.21875C58.8255 3.84115 58.4577 3.55794 58.0215 3.36914C57.5853 3.17383 57.084 3.07617 56.5176 3.07617H53.334V0.78125H56.5176C57.4681 0.78125 58.3372 0.94401 59.125 1.26953C59.9193 1.58854 60.6061 2.04753 61.1855 2.64648C61.765 3.24544 62.2109 3.96159 62.5234 4.79492C62.8424 5.62174 63.002 6.54297 63.002 7.55859V8.23242C63.002 9.24154 62.8424 10.1628 62.5234 10.9961C62.2109 11.8294 61.765 12.5456 61.1855 13.1445C60.6126 13.737 59.9258 14.196 59.125 14.5215C58.3307 14.8405 57.4518 15 56.4883 15ZM55.0527 0.78125V15H52.123V0.78125H55.0527ZM70.6582 12.6172V7.91016C70.6582 7.57161 70.6029 7.2819 70.4922 7.04102C70.3815 6.79362 70.209 6.60156 69.9746 6.46484C69.7467 6.32812 69.4505 6.25977 69.0859 6.25977C68.7734 6.25977 68.5033 6.3151 68.2754 6.42578C68.0475 6.52995 67.8717 6.68294 67.748 6.88477C67.6243 7.08008 67.5625 7.3112 67.5625 7.57812H64.75C64.75 7.12891 64.8542 6.70247 65.0625 6.29883C65.2708 5.89518 65.5736 5.54036 65.9707 5.23438C66.3678 4.92188 66.8398 4.67773 67.3867 4.50195C67.9401 4.32617 68.5586 4.23828 69.2422 4.23828C70.0625 4.23828 70.7917 4.375 71.4297 4.64844C72.0677 4.92188 72.569 5.33203 72.9336 5.87891C73.3047 6.42578 73.4902 7.10938 73.4902 7.92969V12.4512C73.4902 13.0306 73.526 13.5059 73.5977 13.877C73.6693 14.2415 73.7734 14.5605 73.9102 14.834V15H71.0684C70.9316 14.7135 70.8275 14.3555 70.7559 13.9258C70.6908 13.4896 70.6582 13.0534 70.6582 12.6172ZM71.0293 8.56445L71.0488 10.1562H69.4766C69.1055 10.1562 68.7832 10.1986 68.5098 10.2832C68.2363 10.3678 68.0117 10.4883 67.8359 10.6445C67.6602 10.7943 67.5299 10.9701 67.4453 11.1719C67.3672 11.3737 67.3281 11.5951 67.3281 11.8359C67.3281 12.0768 67.3835 12.2949 67.4941 12.4902C67.6048 12.679 67.7643 12.8288 67.9727 12.9395C68.181 13.0436 68.4251 13.0957 68.7051 13.0957C69.1283 13.0957 69.4961 13.0111 69.8086 12.8418C70.1211 12.6725 70.362 12.4642 70.5312 12.2168C70.707 11.9694 70.7982 11.735 70.8047 11.5137L71.5469 12.7051C71.4427 12.972 71.2995 13.2487 71.1172 13.5352C70.9414 13.8216 70.7168 14.0918 70.4434 14.3457C70.1699 14.5931 69.8411 14.7982 69.457 14.9609C69.0729 15.1172 68.6172 15.1953 68.0898 15.1953C67.4193 15.1953 66.8105 15.0618 66.2637 14.7949C65.7233 14.5215 65.2936 14.1471 64.9746 13.6719C64.6621 13.1901 64.5059 12.6432 64.5059 12.0312C64.5059 11.4779 64.61 10.9863 64.8184 10.5566C65.0267 10.127 65.3327 9.76562 65.7363 9.47266C66.1465 9.17318 66.6576 8.94857 67.2695 8.79883C67.8815 8.64258 68.5911 8.56445 69.3984 8.56445H71.0293ZM81.3711 12.0801C81.3711 11.8783 81.3125 11.696 81.1953 11.5332C81.0781 11.3704 80.86 11.2207 80.541 11.084C80.2285 10.9408 79.776 10.8105 79.1836 10.6934C78.6497 10.5762 78.1517 10.4297 77.6895 10.2539C77.2337 10.0716 76.8366 9.85352 76.498 9.59961C76.166 9.3457 75.9056 9.04622 75.7168 8.70117C75.528 8.34961 75.4336 7.94922 75.4336 7.5C75.4336 7.05729 75.528 6.64062 75.7168 6.25C75.9121 5.85938 76.1888 5.51432 76.5469 5.21484C76.9115 4.90885 77.3542 4.67122 77.875 4.50195C78.4023 4.32617 78.9948 4.23828 79.6523 4.23828C80.5703 4.23828 81.3581 4.38477 82.0156 4.67773C82.6797 4.9707 83.1875 5.37435 83.5391 5.88867C83.8971 6.39648 84.0762 6.97591 84.0762 7.62695H81.2637C81.2637 7.35352 81.2051 7.10938 81.0879 6.89453C80.9772 6.67318 80.8014 6.50065 80.5605 6.37695C80.3262 6.24674 80.0202 6.18164 79.6426 6.18164C79.3301 6.18164 79.0599 6.23698 78.832 6.34766C78.6042 6.45182 78.4284 6.59505 78.3047 6.77734C78.1875 6.95312 78.1289 7.14844 78.1289 7.36328C78.1289 7.52604 78.1615 7.67253 78.2266 7.80273C78.2982 7.92643 78.4121 8.04036 78.5684 8.14453C78.7246 8.2487 78.9264 8.34635 79.1738 8.4375C79.4277 8.52214 79.7402 8.60026 80.1113 8.67188C80.873 8.82812 81.5534 9.0332 82.1523 9.28711C82.7513 9.53451 83.2266 9.87305 83.5781 10.3027C83.9297 10.7259 84.1055 11.2826 84.1055 11.9727C84.1055 12.4414 84.0013 12.8711 83.793 13.2617C83.5846 13.6523 83.2852 13.9941 82.8945 14.2871C82.5039 14.5736 82.0352 14.7982 81.4883 14.9609C80.9479 15.1172 80.3392 15.1953 79.6621 15.1953C78.679 15.1953 77.8457 15.0195 77.1621 14.668C76.485 14.3164 75.9707 13.8704 75.6191 13.3301C75.2741 12.7832 75.1016 12.2233 75.1016 11.6504H77.7676C77.7806 12.0345 77.8783 12.3438 78.0605 12.5781C78.2493 12.8125 78.487 12.9818 78.7734 13.0859C79.0664 13.1901 79.3822 13.2422 79.7207 13.2422C80.0853 13.2422 80.388 13.1934 80.6289 13.0957C80.8698 12.9915 81.0521 12.8548 81.1758 12.6855C81.306 12.5098 81.3711 12.3079 81.3711 12.0801ZM88.6758 0V15H85.8633V0H88.6758ZM88.2754 9.3457H87.5039C87.5104 8.61003 87.6081 7.93294 87.7969 7.31445C87.9857 6.68945 88.2559 6.14909 88.6074 5.69336C88.959 5.23112 89.3789 4.87305 89.8672 4.61914C90.362 4.36523 90.9089 4.23828 91.5078 4.23828C92.0286 4.23828 92.5007 4.31315 92.9238 4.46289C93.3535 4.60612 93.7214 4.84049 94.0273 5.16602C94.3398 5.48503 94.5807 5.90495 94.75 6.42578C94.9193 6.94661 95.0039 7.57812 95.0039 8.32031V15H92.1719V8.30078C92.1719 7.83203 92.1035 7.46419 91.9668 7.19727C91.8366 6.92383 91.6445 6.73177 91.3906 6.62109C91.1432 6.50391 90.8372 6.44531 90.4727 6.44531C90.069 6.44531 89.724 6.52018 89.4375 6.66992C89.1576 6.81966 88.9329 7.02799 88.7637 7.29492C88.5944 7.55534 88.4707 7.86133 88.3926 8.21289C88.3145 8.56445 88.2754 8.94206 88.2754 9.3457ZM97.1426 0H99.9551V12.5781L99.6719 15H97.1426V0ZM106.645 9.60938V9.81445C106.645 10.6022 106.56 11.3249 106.391 11.9824C106.228 12.64 105.974 13.2096 105.629 13.6914C105.284 14.1667 104.854 14.5378 104.34 14.8047C103.832 15.0651 103.233 15.1953 102.543 15.1953C101.898 15.1953 101.339 15.0651 100.863 14.8047C100.395 14.5443 100.001 14.1764 99.6816 13.7012C99.3626 13.2259 99.1055 12.6693 98.9102 12.0312C98.7148 11.3932 98.5684 10.6966 98.4707 9.94141V9.49219C98.5684 8.73698 98.7148 8.04036 98.9102 7.40234C99.1055 6.76432 99.3626 6.20768 99.6816 5.73242C100.001 5.25716 100.395 4.88932 100.863 4.62891C101.332 4.36849 101.885 4.23828 102.523 4.23828C103.22 4.23828 103.826 4.37174 104.34 4.63867C104.861 4.89909 105.29 5.27018 105.629 5.75195C105.974 6.22721 106.228 6.79362 106.391 7.45117C106.56 8.10221 106.645 8.82161 106.645 9.60938ZM103.832 9.81445V9.60938C103.832 9.17969 103.799 8.77604 103.734 8.39844C103.676 8.01432 103.572 7.67904 103.422 7.39258C103.272 7.09961 103.067 6.86849 102.807 6.69922C102.553 6.52995 102.224 6.44531 101.82 6.44531C101.436 6.44531 101.111 6.51042 100.844 6.64062C100.577 6.77083 100.355 6.95312 100.18 7.1875C100.01 7.42188 99.8835 7.70182 99.7988 8.02734C99.7142 8.34635 99.6621 8.69792 99.6426 9.08203V10.3613C99.6621 10.8757 99.7467 11.3314 99.8965 11.7285C100.053 12.1191 100.287 12.4284 100.6 12.6562C100.919 12.8776 101.332 12.9883 101.84 12.9883C102.237 12.9883 102.566 12.9102 102.826 12.7539C103.087 12.5977 103.288 12.3763 103.432 12.0898C103.581 11.8034 103.686 11.4681 103.744 11.084C103.803 10.6934 103.832 10.2702 103.832 9.81445ZM107.943 9.82422V9.61914C107.943 8.8444 108.054 8.13151 108.275 7.48047C108.497 6.82292 108.819 6.25326 109.242 5.77148C109.665 5.28971 110.186 4.91536 110.805 4.64844C111.423 4.375 112.133 4.23828 112.934 4.23828C113.734 4.23828 114.447 4.375 115.072 4.64844C115.697 4.91536 116.221 5.28971 116.645 5.77148C117.074 6.25326 117.4 6.82292 117.621 7.48047C117.842 8.13151 117.953 8.8444 117.953 9.61914V9.82422C117.953 10.5924 117.842 11.3053 117.621 11.9629C117.4 12.6139 117.074 13.1836 116.645 13.6719C116.221 14.1536 115.701 14.528 115.082 14.7949C114.464 15.0618 113.754 15.1953 112.953 15.1953C112.152 15.1953 111.439 15.0618 110.814 14.7949C110.196 14.528 109.672 14.1536 109.242 13.6719C108.819 13.1836 108.497 12.6139 108.275 11.9629C108.054 11.3053 107.943 10.5924 107.943 9.82422ZM110.756 9.61914V9.82422C110.756 10.2669 110.795 10.6803 110.873 11.0645C110.951 11.4486 111.075 11.7871 111.244 12.0801C111.42 12.3665 111.648 12.5911 111.928 12.7539C112.208 12.9167 112.549 12.998 112.953 12.998C113.344 12.998 113.679 12.9167 113.959 12.7539C114.239 12.5911 114.464 12.3665 114.633 12.0801C114.802 11.7871 114.926 11.4486 115.004 11.0645C115.089 10.6803 115.131 10.2669 115.131 9.82422V9.61914C115.131 9.18945 115.089 8.78581 115.004 8.4082C114.926 8.02409 114.799 7.68555 114.623 7.39258C114.454 7.0931 114.229 6.85872 113.949 6.68945C113.669 6.52018 113.331 6.43555 112.934 6.43555C112.536 6.43555 112.198 6.52018 111.918 6.68945C111.645 6.85872 111.42 7.0931 111.244 7.39258C111.075 7.68555 110.951 8.02409 110.873 8.4082C110.795 8.78581 110.756 9.18945 110.756 9.61914ZM125.385 12.6172V7.91016C125.385 7.57161 125.329 7.2819 125.219 7.04102C125.108 6.79362 124.936 6.60156 124.701 6.46484C124.473 6.32812 124.177 6.25977 123.812 6.25977C123.5 6.25977 123.23 6.3151 123.002 6.42578C122.774 6.52995 122.598 6.68294 122.475 6.88477C122.351 7.08008 122.289 7.3112 122.289 7.57812H119.477C119.477 7.12891 119.581 6.70247 119.789 6.29883C119.997 5.89518 120.3 5.54036 120.697 5.23438C121.094 4.92188 121.566 4.67773 122.113 4.50195C122.667 4.32617 123.285 4.23828 123.969 4.23828C124.789 4.23828 125.518 4.375 126.156 4.64844C126.794 4.92188 127.296 5.33203 127.66 5.87891C128.031 6.42578 128.217 7.10938 128.217 7.92969V12.4512C128.217 13.0306 128.253 13.5059 128.324 13.877C128.396 14.2415 128.5 14.5605 128.637 14.834V15H125.795C125.658 14.7135 125.554 14.3555 125.482 13.9258C125.417 13.4896 125.385 13.0534 125.385 12.6172ZM125.756 8.56445L125.775 10.1562H124.203C123.832 10.1562 123.51 10.1986 123.236 10.2832C122.963 10.3678 122.738 10.4883 122.562 10.6445C122.387 10.7943 122.257 10.9701 122.172 11.1719C122.094 11.3737 122.055 11.5951 122.055 11.8359C122.055 12.0768 122.11 12.2949 122.221 12.4902C122.331 12.679 122.491 12.8288 122.699 12.9395C122.908 13.0436 123.152 13.0957 123.432 13.0957C123.855 13.0957 124.223 13.0111 124.535 12.8418C124.848 12.6725 125.089 12.4642 125.258 12.2168C125.434 11.9694 125.525 11.735 125.531 11.5137L126.273 12.7051C126.169 12.972 126.026 13.2487 125.844 13.5352C125.668 13.8216 125.443 14.0918 125.17 14.3457C124.896 14.5931 124.568 14.7982 124.184 14.9609C123.799 15.1172 123.344 15.1953 122.816 15.1953C122.146 15.1953 121.537 15.0618 120.99 14.7949C120.45 14.5215 120.02 14.1471 119.701 13.6719C119.389 13.1901 119.232 12.6432 119.232 12.0312C119.232 11.4779 119.337 10.9863 119.545 10.5566C119.753 10.127 120.059 9.76562 120.463 9.47266C120.873 9.17318 121.384 8.94857 121.996 8.79883C122.608 8.64258 123.318 8.56445 124.125 8.56445H125.756ZM133.197 6.73828V15H130.385V4.43359H133.031L133.197 6.73828ZM136.381 4.36523L136.332 6.97266C136.195 6.95312 136.029 6.93685 135.834 6.92383C135.645 6.9043 135.473 6.89453 135.316 6.89453C134.919 6.89453 134.574 6.94661 134.281 7.05078C133.995 7.14844 133.754 7.29492 133.559 7.49023C133.37 7.68555 133.227 7.92318 133.129 8.20312C133.038 8.48307 132.986 8.80208 132.973 9.16016L132.406 8.98438C132.406 8.30078 132.475 7.67253 132.611 7.09961C132.748 6.52018 132.947 6.01562 133.207 5.58594C133.474 5.15625 133.799 4.82422 134.184 4.58984C134.568 4.35547 135.007 4.23828 135.502 4.23828C135.658 4.23828 135.818 4.2513 135.98 4.27734C136.143 4.29688 136.277 4.32617 136.381 4.36523ZM143.754 12.6953V0H146.586V15H144.037L143.754 12.6953ZM137.074 9.84375V9.63867C137.074 8.83138 137.165 8.09896 137.348 7.44141C137.53 6.77734 137.797 6.20768 138.148 5.73242C138.5 5.25716 138.933 4.88932 139.447 4.62891C139.962 4.36849 140.548 4.23828 141.205 4.23828C141.824 4.23828 142.364 4.36849 142.826 4.62891C143.295 4.88932 143.692 5.26042 144.018 5.74219C144.35 6.21745 144.617 6.7806 144.818 7.43164C145.02 8.07617 145.167 8.78255 145.258 9.55078V10C145.167 10.7357 145.02 11.4193 144.818 12.0508C144.617 12.6823 144.35 13.2357 144.018 13.7109C143.692 14.1797 143.295 14.5443 142.826 14.8047C142.357 15.0651 141.811 15.1953 141.186 15.1953C140.528 15.1953 139.942 15.0618 139.428 14.7949C138.92 14.528 138.49 14.1536 138.139 13.6719C137.794 13.1901 137.53 12.6237 137.348 11.9727C137.165 11.3216 137.074 10.612 137.074 9.84375ZM139.887 9.63867V9.84375C139.887 10.2799 139.919 10.6868 139.984 11.0645C140.056 11.4421 140.17 11.7773 140.326 12.0703C140.489 12.3568 140.697 12.5814 140.951 12.7441C141.212 12.9004 141.527 12.9785 141.898 12.9785C142.38 12.9785 142.777 12.8711 143.09 12.6562C143.402 12.4349 143.64 12.1322 143.803 11.748C143.972 11.3639 144.07 10.9212 144.096 10.4199V9.14062C144.076 8.73047 144.018 8.36263 143.92 8.03711C143.829 7.70508 143.692 7.42188 143.51 7.1875C143.334 6.95312 143.113 6.77083 142.846 6.64062C142.585 6.51042 142.276 6.44531 141.918 6.44531C141.553 6.44531 141.241 6.52995 140.98 6.69922C140.72 6.86198 140.508 7.08659 140.346 7.37305C140.189 7.65951 140.072 7.99805 139.994 8.38867C139.923 8.77279 139.887 9.18945 139.887 9.63867Z" fill="black"/>
        </svg>
    </div>
)

export default Logo
