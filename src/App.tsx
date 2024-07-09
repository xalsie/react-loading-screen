import { useState, Fragment } from "react";
import TabButtons from "./components/Tabs/TabButtons";
import TabContent from "./components/Tabs/TabContent";
import AvatarsCart from "./components/AvatarsCart";

function App() {
    const [activeTab, setActiveTab] = useState(0);
    const selectedTab = [
        {
            Title: "Home",
            Description: (
                <Fragment>
                    <div className="relative">
                        <div className="flex flex-wrap items-stretch">
                            <h3 className="text-white font-light text-4xl">
                                Bienvenue sur&nbsp;
                            </h3>
                            <span className="font-bold text-4xl text-yellow-500 leading-10">
                                World Wide !
                            </span>
                        </div>
                        <p className="flex font-light text-1xl text-yellow-500">
                            "World Wide" est un serveur à accès libre totalement
                            exclusif !
                        </p>
                        <p className="text-white font-light text-1xl text-wrap w-96 mt-10">
                            › Bienvenue sur World Wide, un serveur innovant et
                            propre à lui même. Sois prêts pour une immersion
                            totale! Accroche toi car ici, les possibilités sont
                            infinies et les défis à la hauteur de ton ambition.
                            Entres dans la ville et ensemble, façonnons notre
                            propre serveur de demain !
                        </p>

                        <div className="w-96 h-20 bg-[#ffffff2e] rounded mt-10 text-xs justify-center">
                            <div className="flex items-center justify-around h-full">
                                <span className="text-purple-800 font-bold bg-slate-50 p-2 rounded">
                                    <svg
                                        width="38"
                                        height="30"
                                        viewBox="0 0 38 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_1_34)">
                                            <path
                                                d="M8.57483 25.1492C9.46689 25.5984 10.2916 26.0508 11.1467 26.4284C11.5824 26.6211 11.7547 26.7823 11.4578 27.2542C10.9537 28.0546 10.4825 28.8773 10.0083 29.6977C9.83858 29.9915 9.65107 30.0611 9.32228 29.9496C6.1627 28.8784 3.22836 27.3434 0.531088 25.3284C0.329154 25.1777 0.166052 24.8434 0.142382 24.5788C-0.528515 17.0838 1.18978 10.1896 4.95331 3.79421C5.5103 2.84806 6.13238 2.13229 7.18236 1.82844C9.14698 1.2596 11.1009 0.650751 13.0573 0.0522894C13.4856 -0.0788644 13.7745 0.0357509 13.9172 0.493443C13.9509 0.60152 14.016 0.698828 14.0652 0.801905C14.6876 2.10767 14.6884 2.11306 16.0605 1.92498C18.3235 1.61498 20.5837 1.69806 22.8364 2.01498C23.2691 2.07575 23.4947 1.96421 23.6423 1.56383C23.7344 1.31383 23.8535 1.07421 23.9681 0.834213C24.4071 -0.0877105 24.4116 -0.102326 25.3817 0.116136C27.5981 0.615366 29.7809 1.25498 31.8232 2.28306C32.3477 2.5469 32.7423 3.18844 33.0822 3.73383C34.9821 6.78075 36.3305 10.0846 37.129 13.6181C37.8328 16.7308 38.095 19.8961 37.9693 23.0915C37.8883 25.155 37.8713 25.15 36.1733 26.2734C33.8478 27.8123 31.3798 29.0323 28.7609 29.9311C28.4048 30.0534 28.2158 29.9884 28.0353 29.6773C27.5412 28.8258 27.0382 27.98 26.5319 27.1365C26.341 26.8192 26.3921 26.645 26.7412 26.4869C27.4491 26.1661 28.1418 25.8058 28.8271 25.435C29.042 25.3188 29.4751 25.2334 29.2587 24.8634C29.0842 24.5654 28.7698 24.2754 28.3256 24.4738C27.9032 24.6627 27.4735 24.8342 27.0437 25.0042C24.116 26.1623 21.0892 26.7034 17.957 26.5381C15.1891 26.3919 12.5377 25.7127 9.988 24.5904C9.30601 24.2904 9.17435 24.3327 8.57409 25.1492H8.57483ZM16.2343 16.4769C16.1163 15.9392 16.0608 15.3758 15.8689 14.8684C15.0549 12.715 12.6498 11.7004 10.7066 13.1823C9.01938 14.4688 8.73275 17.5415 10.1663 19.2692C10.9045 20.1588 11.8209 20.6915 12.9782 20.5469C14.8818 20.3092 16.1526 18.6631 16.2339 16.4769H16.2343ZM28.9207 16.4992C28.8116 15.9788 28.7609 15.4354 28.5823 14.9423C28.1166 13.6577 27.2623 12.7696 25.9216 12.54C24.6623 12.3246 23.569 12.7361 22.775 13.7792C21.4794 15.4811 21.6518 18.0396 23.1408 19.5581C23.839 20.2704 24.6841 20.6811 25.6879 20.5492C27.4927 20.3119 28.8427 18.5738 28.9203 16.4992H28.9207Z"
                                                fill="#2B0E6A"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_34">
                                                <rect
                                                    width="38"
                                                    height="30"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>

                                <div className="grid grid-cols-1">
                                    <span className="text-white font-bold text-1xl">
                                        Notre discord
                                    </span>
                                    <span className="text-gray-400 font-light text-1xl">
                                        1092 membres en lignes !
                                    </span>
                                </div>

                                <span className="text-purple-800 font-bold bg-slate-50 p-1 rounded">
                                    Rejoins nous !
                                </span>
                            </div>
                        </div>
                    </div>
                </Fragment>
            ),
            Image: "./public/image1.png",
        },
        {
            Title: "News",
            Description: (
                <Fragment>
                    <div className="relative">
                        <div className="flex flex-wrap items-stretch">
                            <h3 className="text-white font-light text-4xl">
                                News et infos de&nbsp;
                            </h3>
                            <span className="font-bold text-4xl text-yellow-500 leading-10">
                                World Wide !
                            </span>
                        </div>
                        <p className="flex font-light text-1xl text-yellow-500">
                            Voici les news et information de notre serveur en
                            temps réel !
                        </p>

                        <div className="w-1/3 h-38 bg-[#ffffff2e] rounded mt-10 text-xs justify-around p-3">
                            <div className="flex flex-wrap">
                                <div className="basis-2/3">
                                    <span className="text-white font-bold text-2xl">
                                        Un nouveaux serveur ?
                                    </span>
                                </div>
                                <div className="basis-1/3 text-end self-center">
                                    <span className="text-purple-800 font-bold bg-slate-50 p-2 rounded hover:bg-yellow-500 hover:text-slate-100 cursor-pointer">
                                        Information
                                    </span>
                                </div>
                                <div className="basis-full mt-2">
                                    <span className="text-white font-light text-1xl">
                                        World Wide est un serveur qui vient
                                        d'ouvrir ses portes. Notre but est de
                                        vous offrir un RP free access totalement
                                        exclusif grâce à nos scripts réfléchis
                                        et travaillés pour une gestion maximale
                                        en jeu et une utilité optimale !
                                    </span>
                                </div>
                                <div className="basis-1/3 mt-2">
                                    <span className="text-gray-400 font-light text-xs">
                                        09/05/2024
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/3 h-38 bg-[#ffffff2e] rounded mt-10 text-xs justify-around p-3">
                            <div className="flex flex-wrap">
                                <div className="basis-2/3">
                                    <span className="text-white font-bold text-2xl">
                                        Pour être staff ?
                                    </span>
                                </div>
                                <div className="basis-1/3 text-end self-center">
                                    <span className="text-purple-800 font-bold bg-slate-50 p-2 rounded hover:bg-yellow-500 hover:text-slate-100 cursor-pointer">
                                        Information
                                    </span>
                                </div>
                                <div className="basis-full mt-2">
                                    <span className="text-white font-light text-1xl">
                                        Afin de devenir membre du staff sur
                                        World Wide, certaines conditions doivent
                                        être respectées, telles que l'âge
                                        minimum de 18 ans pour postuler. Tout se
                                        passe sur notre Discord : une fois votre
                                        candidature soumise, un superviseur vous
                                        répondra !
                                    </span>
                                </div>
                                <div className="basis-1/3 mt-2">
                                    <span className="text-gray-400 font-light text-xs">
                                        09/05/2024
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/3 h-38 bg-[#ffffff2e] rounded mt-10 text-xs justify-around p-3">
                            <div className="flex flex-wrap">
                                <div className="basis-2/3">
                                    <span className="text-white font-bold text-2xl">
                                        Voici nos réseaux
                                    </span>
                                </div>
                                <div className="basis-1/3 text-end self-center">
                                    <span className="text-purple-800 font-bold bg-slate-50 p-2 rounded hover:bg-yellow-500 hover:text-slate-100 cursor-pointer">
                                        Information
                                    </span>
                                </div>
                                <div className="basis-1/2 mt-5">
                                    <span className="">
                                        <svg
                                            width="38"
                                            height="30"
                                            viewBox="0 0 38 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1_34)">
                                                <path
                                                    d="M8.57483 25.1492C9.46689 25.5984 10.2916 26.0508 11.1467 26.4284C11.5824 26.6211 11.7547 26.7823 11.4578 27.2542C10.9537 28.0546 10.4825 28.8773 10.0083 29.6977C9.83858 29.9915 9.65107 30.0611 9.32228 29.9496C6.1627 28.8784 3.22836 27.3434 0.531088 25.3284C0.329154 25.1777 0.166052 24.8434 0.142382 24.5788C-0.528515 17.0838 1.18978 10.1896 4.95331 3.79421C5.5103 2.84806 6.13238 2.13229 7.18236 1.82844C9.14698 1.2596 11.1009 0.650751 13.0573 0.0522894C13.4856 -0.0788644 13.7745 0.0357509 13.9172 0.493443C13.9509 0.60152 14.016 0.698828 14.0652 0.801905C14.6876 2.10767 14.6884 2.11306 16.0605 1.92498C18.3235 1.61498 20.5837 1.69806 22.8364 2.01498C23.2691 2.07575 23.4947 1.96421 23.6423 1.56383C23.7344 1.31383 23.8535 1.07421 23.9681 0.834213C24.4071 -0.0877105 24.4116 -0.102326 25.3817 0.116136C27.5981 0.615366 29.7809 1.25498 31.8232 2.28306C32.3477 2.5469 32.7423 3.18844 33.0822 3.73383C34.9821 6.78075 36.3305 10.0846 37.129 13.6181C37.8328 16.7308 38.095 19.8961 37.9693 23.0915C37.8883 25.155 37.8713 25.15 36.1733 26.2734C33.8478 27.8123 31.3798 29.0323 28.7609 29.9311C28.4048 30.0534 28.2158 29.9884 28.0353 29.6773C27.5412 28.8258 27.0382 27.98 26.5319 27.1365C26.341 26.8192 26.3921 26.645 26.7412 26.4869C27.4491 26.1661 28.1418 25.8058 28.8271 25.435C29.042 25.3188 29.4751 25.2334 29.2587 24.8634C29.0842 24.5654 28.7698 24.2754 28.3256 24.4738C27.9032 24.6627 27.4735 24.8342 27.0437 25.0042C24.116 26.1623 21.0892 26.7034 17.957 26.5381C15.1891 26.3919 12.5377 25.7127 9.988 24.5904C9.30601 24.2904 9.17435 24.3327 8.57409 25.1492H8.57483ZM16.2343 16.4769C16.1163 15.9392 16.0608 15.3758 15.8689 14.8684C15.0549 12.715 12.6498 11.7004 10.7066 13.1823C9.01938 14.4688 8.73275 17.5415 10.1663 19.2692C10.9045 20.1588 11.8209 20.6915 12.9782 20.5469C14.8818 20.3092 16.1526 18.6631 16.2339 16.4769H16.2343ZM28.9207 16.4992C28.8116 15.9788 28.7609 15.4354 28.5823 14.9423C28.1166 13.6577 27.2623 12.7696 25.9216 12.54C24.6623 12.3246 23.569 12.7361 22.775 13.7792C21.4794 15.4811 21.6518 18.0396 23.1408 19.5581C23.839 20.2704 24.6841 20.6811 25.6879 20.5492C27.4927 20.3119 28.8427 18.5738 28.9203 16.4992H28.9207Z"
                                                    fill="#2B0E6A"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_34">
                                                    <rect
                                                        width="38"
                                                        height="30"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className="text-slate-50 font-bold">
                                        discord.gg/worldwidefa
                                    </span>
                                </div>
                                <div className="basis-1/2 mt-5">
                                    <span className="font-bold bg-slate-50 p-2 rounded">
                                        <svg
                                            width="23"
                                            height="19"
                                            viewBox="0 0 23 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.08292 10.6919C8.5262 10.5463 8.0091 10.6157 7.50016 10.8152C6.61362 11.1628 6.01215 12.0444 6.03772 12.9796C6.06424 13.9529 6.64222 14.7442 7.56136 15.0656C9.22594 15.6479 10.837 14.556 10.8373 12.8441C10.8379 9.41881 10.8408 5.99333 10.8309 2.568C10.8301 2.29815 10.91 2.22903 11.1817 2.23579C11.8883 2.25361 12.5959 2.24931 13.3026 2.23748C13.5292 2.23364 13.5979 2.31812 13.6144 2.52239C13.7489 4.18729 15.0551 5.53349 16.6898 5.90548C16.8913 5.9514 17.0989 5.97828 17.3053 5.99717C17.4661 6.01192 17.523 6.08303 17.5222 6.23277C17.5185 6.95618 17.5156 7.67973 17.5238 8.40298C17.5262 8.6137 17.4263 8.64196 17.2372 8.63213C15.9996 8.56763 14.8553 8.23203 13.8183 7.57268C13.7809 7.54887 13.7427 7.52568 13.7027 7.50648C13.6885 7.49957 13.6678 7.50541 13.6117 7.50541C13.6034 7.58159 13.5869 7.66191 13.5869 7.74209C13.5858 9.41559 13.5711 11.0892 13.5914 12.7624C13.6099 14.2989 13.0583 15.5991 11.8782 16.6229C10.6377 17.6991 9.16841 18.0641 7.51821 17.8C5.4134 17.463 3.66365 15.7448 3.33767 13.6317C2.97589 11.2868 4.53916 8.8639 6.90828 8.19471C7.56551 8.00902 8.22962 7.90935 8.91642 7.98829C9.06087 8.00488 9.12591 8.05556 9.12511 8.1984C9.12111 8.98277 9.12191 9.76715 9.11936 10.5515C9.11936 10.5844 9.1029 10.6173 9.08292 10.6919Z"
                                                fill="#301B5F"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-slate-50 font-bold">
                                        worldwidefa
                                    </span>
                                </div>

                                <div className="basis-1/3 mt-2">
                                    <span className="text-gray-400 font-light text-xs">
                                        09/05/2024
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            ),
            Image: "./public/image2.png",
        },
        {
            Title: "Staff",
            Description: (
                <Fragment>
                    <div className="relative">
                        <div className="flex flex-wrap items-stretch">
                            <h3 className="text-white font-light text-4xl">
                                L'équipe de&nbsp;
                            </h3>
                            <span className="font-bold text-4xl text-yellow-500 leading-10">
                                World Wide !
                            </span>
                        </div>
                        <p className="flex font-light text-1xl text-yellow-500">
                            Voici notre équipe avec la direction et les
                            techniciens !
                        </p>

                        <div className="gap-4 grid grid-cols-3 w-fit mt-10">
                            <AvatarsCart
                                name="Lenny"
                                role="Fondateur"
                                avatar="./public/avatars/lenny.png"
                            />

                            <AvatarsCart
                                name="Thomas"
                                role="Fondateur"
                                avatar="./public/avatars/thomas.png"
                            />

                            <AvatarsCart
                                name="Tom"
                                role="Fondateur"
                                avatar="./public/avatars/tom.png"
                            />

                            <AvatarsCart
                                name="4L5"
                                role="Fondateur"
                                avatar="./public/avatars/4l5.png"
                            />

                            <AvatarsCart
                                name="Ismael"
                                role="Développeur"
                                avatar="./public/avatars/ismael.png"
                            />

                            <AvatarsCart
                                name="Hijo"
                                role="Community managers"
                                avatar="./public/avatars/hijo.png"
                            />
                        </div>
                    </div>
                </Fragment>
            ),
            Image: "./public/image3.png",
        },
    ];

    return (
        <div className="flex min-h-screen flex-col justify-between relative">
            <div className="mx-40 mt-20 flex flex-wrap items-stretch">
                <div className="mr-40">
                    <svg
                        className="w-20"
                        viewBox="0 0 81 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M54.8486 46.1991H46.3516L64.6207 10.3981C66.9387 5.85423 71.5671 3 76.6164 3H80.7342L60.4549 42.7414C59.3717 44.8652 57.2084 46.1991 54.847 46.1991H54.8486Z"
                            fill="#F2B90C"
                        />
                        <path
                            d="M56.8331 12.3242L40.6747 44.1659C40.3575 44.7897 39.8808 45.2991 39.3114 45.6518C38.7404 46.0045 38.075 46.2004 37.3817 46.2004H28.8847C28.3756 46.2004 27.8758 46.1377 27.3945 46.0186L32.3417 36.3227L41.3045 18.622C43.262 14.7553 47.191 12.3242 51.4805 12.3242H56.8331Z"
                            fill="white"
                        />
                        <g filter="url(#filter0_d_1_11)">
                            <path
                                d="M37.3826 46.1991H28.8856C28.3765 46.1991 27.8767 46.1364 27.3954 46.0172C25.6437 45.5878 24.1288 44.4075 23.2777 42.7414L3 3H7.11774C12.167 3 16.7954 5.85423 19.1135 10.3981L32.3426 36.3213L37.3826 46.1991Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_1_11"
                                x="0"
                                y="0"
                                width="54.3826"
                                height="63.1991"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="7" dy="7" />
                                <feGaussianBlur stdDeviation="5" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_1_11"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_11"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <TabButtons
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    selectedTab={selectedTab}
                />
            </div>

            <TabContent activeTab={activeTab} selectedTab={selectedTab} />

            <div className="mx-40 my-20">
                {/* feat: player musique */}
                <progress className="w-full" value="50" max="100"></progress>
            </div>
        </div>
    );
}

export default App;
