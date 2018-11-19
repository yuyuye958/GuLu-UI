(function (window) {
    var svgSprite = '<svg><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M511.21162109 62c24.47578125 0 44.21513672 19.82636719 44.21513672 44.21513672v136.06523437c0 24.47666016-19.82724609 44.21513672-44.21513672 44.21513672-24.47578125 0-44.21513672-19.82636719-44.21513671-44.21513672V106.30214844C466.90859375 81.82636719 486.73583984 62 511.21162109 62z" fill="#EAEAEA" ></path><path d="M744.30371094 128.84873047c21.14296875 12.19394531 28.42382813 39.30205078 16.23076172 60.44414062L692.45703125 307.19902344c-12.19394531 21.14296875-39.30205078 28.42382813-60.44414062 16.22988281-21.14296875-12.19394531-28.42382813-39.30205078-16.22988282-60.44414062l68.0765625-117.81914063c12.28183594-21.22998047 39.30205078-28.51171875 60.44501953-16.31689453z" fill="#9B9B9B" ></path><path d="M891.6875 290.88212891c12.19394531 21.14208984 5.00097656 48.25019531-16.22988281 60.44414062l-117.81826172 68.0765625c-21.14296875 12.19482422-48.25107422 5.00097656-60.44501953-16.2290039-12.19394531-21.14296875-5.00097656-48.25019531 16.22988281-60.44501954l117.81826172-68.0765625c21.14296875-12.19394531 48.16318359-4.91308594 60.44501953 16.22988282z" fill="#9D9B9B" ></path><path d="M959.7640625 502.56933594c0 24.47578125-19.82636719 44.21513672-44.21513672 44.21513672H779.48369141c-24.47666016 0-44.21513672-19.82724609-44.21513672-44.21513672 0-24.47578125 19.82636719-44.21513672 44.21513672-44.21513672h136.06523437c24.47666016-0.08789063 44.21513672 19.73935547 44.21513672 44.21513672z" fill="#A2A0A0" ></path><path d="M891.6875 731.45146484c-12.19482422 21.14208984-39.30205078 28.42382813-60.44501953 16.22900391l-117.81826172-68.0765625c-21.14208984-12.19394531-28.42382813-39.30205078-16.22988281-60.44414063 12.19394531-21.14296875 39.30205078-28.42382813 60.44501953-16.22988281l117.81738281 68.0765625c21.14296875 12.19482422 28.42382813 39.30205078 16.23076172 60.44501953z" fill="#A9A9A9" ></path><path d="M744.30371094 910.76679688c-21.14208984 12.19394531-48.24931641 5.00097656-60.44414063-16.22988282l-68.0765625-117.81738281c-12.19394531-21.14296875-5.00097656-48.25107422 16.22988282-60.44501953 21.14208984-12.19482422 48.25019531-5.00097656 60.44414062 16.2290039l68.07744141 117.81914063c12.19394531 21.14208984 5.00009766 48.16230469-16.22988282 60.44414062z" fill="#B1B1B1" ></path><path d="M511.21162109 960.33359375c-24.47578125 0-44.21513672-19.82724609-44.21513671-44.21513672V780.05234375c0-24.47578125 19.82636719-44.21513672 44.21513671-44.21513672 24.47578125 0 44.21513672 19.82724609 44.21513672 44.21513672v136.06611328c0 24.38789063-19.82724609 44.21513672-44.21513672 44.21513672z" fill="#B9B9B9" ></path><path d="M278.03076172 910.76679688c-21.14208984-12.19394531-28.42382813-39.30205078-16.22988281-60.44414063l68.0774414-117.81914063c12.19394531-21.14208984 39.30205078-28.42382813 60.44414063-16.2290039 21.14208984 12.19394531 28.42382813 39.30205078 16.22988281 60.44414062l-68.0765625 117.81826172c-12.19482422 21.14296875-39.30205078 28.42382813-60.44501953 16.22988282z" fill="#C1C0C0" ></path><path d="M113.01523437 731.45146484c-12.19482422-21.14296875-5.00097656-48.25019531 16.22900391-60.44501953l117.81914063-68.0765625c21.14208984-12.19394531 48.25019531-5.00097656 60.44414062 16.22988281 12.19394531 21.14208984 5.00097656 48.25019531-16.22988281 60.44414063l-117.81826172 68.0765625c-21.14208984 12.19482422-48.25019531 4.91308594-60.44414063-16.22900391z" fill="#CAC9C9" ></path><path d="M62.57128906 502.56933594c0-24.47578125 19.82636719-44.21513672 44.21513672-44.21513672h136.06523438c24.47666016 0 44.21513672 19.82636719 44.21513671 44.21513672 0 24.47578125-19.82636719 44.21513672-44.21513671 44.21513672H106.78642578C82.39765625 546.78447266 62.57128906 526.95722656 62.57128906 502.56933594z" fill="#D4D4D4" ></path><path d="M113.01523437 290.88212891c12.19394531-21.14296875 39.30205078-28.42382813 60.44414063-16.22988282l117.81826172 68.0765625c21.14296875 12.19482422 28.42382813 39.30205078 16.22988281 60.44501954-12.19394531 21.14208984-39.30205078 28.42382813-60.44414062 16.2290039L129.24423828 351.32714844c-21.22998047-12.19394531-28.42382813-39.21416016-16.2290039-60.44414063z" fill="#DBDBDB" ></path><path d="M278.03076172 128.84873047c21.14296875-12.19394531 48.25019531-5.00097656 60.44501953 16.22988281l68.0765625 117.81738281c12.19394531 21.14296875 5.00097656 48.25107422-16.22988281 60.44501954-21.14208984 12.19482422-48.25019531 5.00097656-60.44414063-16.22900391L261.80087891 189.29199219c-12.19394531-21.14208984-4.91308594-48.16230469 16.22988281-60.44414063z" fill="#E2E2E2" ></path></symbol><symbol id="icon-thumbs-up" viewBox="0 0 1024 1024"><path d="M908.44040419 496.38851584c0.28971349 3.62142379 0 7.38770489-1.01399893 11.15398486l-71.41447566 315.06386488c-1.01399893 3.7662811-2.60742485 7.24284757-4.7802789 10.28484324-7.67741838 15.20997945-19.26597405 28.82653298-34.76566812 38.53194809-16.22397838 10.28484323-34.47595349 15.20997945-52.43821626 15.20997945l0-0.14485732-458.47224547-0.14485731c-1.59342592 0.28971349-3.18685298 0.43457081-4.92513621 0.43457081-1.73828323 0-3.33171029-0.14485731-4.92513622-0.43457081l-121.96955136 0c-1.73828323 0.28971349-3.47656647 0.43457081-5.2148497 0.43457081-18.25197511 0-33.02738489-14.77540864-33.02738489-33.02738489l0.28971349-396.47347029c0-18.25197511 14.77540864-33.02738489 33.02738489-33.0273849 1.30371243 0 2.75228217 0.14485731 4.05599459 0.2897135l109.65671026-0.2897135 0-0.57942812c100.82043677-7.24284757 180.78147243-89.95616541 183.67861192-191.93545842-0.28971349-2.89713949-0.43457081-5.79427783-0.43457082-8.69141731 0-53.01764323 43.02251349-96.04015787 96.04015787-96.04015787 45.62993949 0 83.72731677 31.86852864 93.57758919 74.45647246l0.43457081 0c5.35970702 24.33596757 8.40170269 49.54107677 8.40170269 75.47047026 0 39.98051783-6.80827677 78.36760974-19.26597405 114.14727566l184.40289621 0.14485732c1.73828323 0 3.33171029 0.14485731 4.92513622 0.43457081 31.43395783 1.30371243 61.85391787 17.38283349 79.67132217 46.20936647C905.39840853 455.82856989 909.88897394 476.3982575 908.44040419 496.38851584M181.83794574 819.99894073l66.05476864 0 0.28971349-329.98413084-66.05476864 0.14485731L181.83794574 819.99894073 181.83794574 819.99894073zM838.32964096 472.05254827c-6.37370595-10.28484323-17.52769081-15.64455026-28.82653298-15.06512327l0-0.14485732c0 0 0 0-0.14485732 0l-233.07483136-0.28971349c-18.25197511 0-33.02738489-14.77540864-33.02738488-33.02738489 0-5.21484971 1.30371243-10.13998592 3.47656646-14.63055246l-0.28971349-0.2897135c13.18198272-24.62568107 22.74254051-51.27936 28.24710485-79.52646485l0.43457082 0c0 0 4.34570809-17.8174043 4.34570808-52.0036443 0-27.08824974-4.92513621-51.85878813-4.92513621-51.85878813l-0.28971349 0c0-0.43457081 0.14485731-1.01399893 0.14485731-1.44856974 0-17.09312-13.76140971-30.85452971-30.85452971-30.8545297-17.09312 0-30.85452971 13.76140971-30.8545297 30.8545297 0 0.7242843 0 1.44856974 0.14485732 2.17285405l-0.43457082 0c0 0 0.57942813 25.78453731-4.63542272 52.58307243-2.17285405 11.29884217-5.21484971 21.8733989-8.11198918 30.27510272 0 0-0.14485731 0-0.14485732-0.14485732-27.81253405 85.03102919-97.63358379 150.94094165-185.12718166 173.10405404l-0.28971349 338.24097736 430.3699968 0.14485731c1.44856974 0 2.89713949 0.14485731 4.34570809 0.28971349 4.34570809-0.57942813 8.54656-2.02799673 12.45769728-4.4905654 5.50456434-3.47656647 9.56055893-8.54656 11.8782703-14.19598052l0.14485731 0 68.66219349-303.33045191-0.28971349-0.14485731C844.26877496 490.01480989 843.39963335 480.30939478 838.32964096 472.05254827"  ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M718.39021484 128.64174628l-385.68275684 382.18389083 384.06789581 387.56676269a37.32124394 37.32124394 0 0 1-52.93157168 52.57271338L255.55296377 539.08571357c-0.71771661-0.62800137-0.89714531-1.52514668-1.4354332-2.15314892a37.14181435 37.14181435 0 0 1-0.26914307-53.02128603L665.90721582 75.62045937A37.32124394 37.32124394 0 1 1 718.39021484 128.55203106z"  ></path></symbol><symbol id="icon-info" viewBox="0 0 1024 1024"><path d="M512 75.09333333C270.71829333 75.09333333 75.09333333 270.71829333 75.09333333 512s195.62496 436.90666667 436.90666667 436.90666667 436.90666667-195.62496 436.90666667-436.90666667S753.28170667 75.09333333 512 75.09333333z m36.40888853 655.36h-72.81777706v-254.86222186h72.81777706v254.86222186z m-36.40888853-345.8844448a54.61333333 54.61333333 0 1 1 0.03640853-109.2630752A54.61333333 54.61333333 0 0 1 512 384.56888853z"  ></path></symbol><symbol id="icon-download" viewBox="0 0 1024 1024"><path d="M731.80483129 415.83392995c0-121.16878222-98.26322205-219.40870258-219.43200427-219.40870257a219.40870258 219.40870258 0 0 0-219.40870257 219.40870257 164.55652693 164.55652693 0 0 0 0 329.11305387v54.87547733c-121.16878222 0.13981013-219.54851271-97.98360178-219.68832285-219.152384a219.38540089 219.38540089 0 0 1 169.2401664-213.86290062c27.30957938-149.03760213 170.31204409-247.72025458 319.34964622-220.38737351a274.44729173 274.44729173 0 0 1 220.4106752 220.38737351 219.50190933 219.50190933 0 0 1 162.34286649 264.61397902 219.54851271 219.54851271 0 0 1-212.81432462 168.4246073v-54.87547734a164.57982862 164.57982862 0 0 0 0-329.13635556zM292.96412445 744.92368213h54.85217564v54.87547734H292.96412445v-54.87547734z m383.9885312 0h54.85217564v54.87547734h-54.85217564v-54.87547734z"  ></path><path d="M539.49599289 783.69769245V498.25200355a27.79891485 27.79891485 0 0 0-27.44938951-27.56589795c-15.12279609 0-27.42608782 12.76932551-27.42608783 27.56589795v285.4456889l-30.89803946-30.89803947a27.61250133 27.61250133 0 0 0-38.63420018 0.13981013 27.12316587 27.12316587 0 0 0-0.46603378 38.33127822l0.30292196 0.30292196 77.89754596 77.96745102c5.12637155 5.10306987 12.09357653 7.89927253 19.2937984 7.80606578 7.22352355 0.18641351 14.16742685-2.65639253 19.20059164-7.80606578L609.21464605 791.62026667a27.61250133 27.61250133 0 0 0-0.16311183-38.68080356 27.14646755 27.14646755 0 0 0-38.63420017-0.13981013L539.49599289 783.69769245z"  ></path></symbol><symbol id="icon-down" viewBox="0 0 1024 1024"><path d="M543.86419315 739.37652439c-12.01234468 12.01234468-28.31481246 23.16666475-43.75925565 19.73456629-15.44444316 2.57407386-30.03086171-9.43827083-42.04320639-19.73456626L86.53707047 366.13581452c-18.87654164-18.87654164-18.87654164-49.76542799 0-68.64196959s49.76542799-18.87654164 68.64196963 0l345.78392203 355.22219283L847.60490875 297.49384493c18.87654164-18.87654164 49.76542799-18.87654164 68.64196962-1e-8s18.87654164 49.76542799-1e-8 68.6419696l-372.38268521 373.24070987z"  ></path></symbol><symbol id="icon-error" viewBox="0 0 1024 1024"><path d="M512 71.68c-245.76 0-440.32 199.68-440.32 440.32 0 245.76 199.68 440.32 440.32 440.32 245.76 0 440.32-199.68 440.32-440.32 0-245.76-194.56-440.32-440.32-440.32z m56.32 701.44c0 10.24-10.24 15.36-15.36 15.36H476.16c-10.24 0-15.36-10.24-15.36-15.36v-76.8c0-10.24 10.24-15.36 15.36-15.36h76.8c10.24 0 15.36 10.24 15.36 15.36v76.8z m0-225.28c0 10.24-10.24 15.36-15.36 15.36H476.16c-10.24 0-15.36-10.24-15.36-15.36V250.88c0-10.24 10.24-15.36 15.36-15.36h76.8c10.24 0 15.36 10.24 15.36 15.36v296.96z"  ></path></symbol><symbol id="icon-settings" viewBox="0 0 1024 1024"><path d="M546.5 958.3h-65.8c-29.3 0-54.5-25.2-54.5-54.5v-39.4c0-9.6-7.8-20.9-16.6-23.6l-1.6-0.6-55.6-23-0.9-0.5c-8.1-4.4-22-2.4-28.5 4.2l-28 28c-9.9 10-23.2 15.5-37.3 15.5-14.2 0-27.4-5.5-37.4-15.5l-46.6-46.5c-20.6-20.6-20.6-54.1-0.1-74.8l28.1-28c6.6-6.6 8.7-20.5 4.2-28.8l-0.8-1.8-23.1-56-0.3-0.7c-2.8-9-14.2-17.4-23.6-17.4h-39.5c-29.3 0-52.7-24-52.7-53.1V476c0-28.7 22.9-51.6 52.8-51.6h39.5c9.1 0 20.8-8.8 23.6-18l0.6-1.5 23.1-57 0.5-0.9c4.4-8.2 2.3-22.2-4.3-28.8l-28-28c-9.9-9.9-15.4-23.2-15.5-37.3 0-14.2 5.5-27.5 15.5-37.5l46.5-46.5c9.9-10 23.2-15.5 37.3-15.5 14.1 0 27.4 5.5 37.4 15.5l28 28c6.5 6.5 20.5 8.6 28.6 4.2l0.9-0.5 57.2-23.6c8.8-2.7 16.6-14 16.6-23.7v-39.5c0-28.9 24.7-52 54.5-52h65.8c29.1 0 52.2 22.6 52.2 52v39.5c0 9.1 8.7 20.8 17.7 23.6l1.5 0.6 56.5 23.1 0.9 0.5c8.2 4.4 22.1 2.3 28.7-4.2l28.1-27.8c9.9-9.9 23.1-15.3 37.3-15.3h0.1c14.2 0 27.4 5.4 37.4 15.3l46.6 46.4c10 9.9 15.5 23.2 15.5 37.4s-5.5 27.4-15.4 37.4l-28.1 28.1c-6.6 6.6-8.6 20.7-4.2 29l0.5 0.9 23.6 57.8c2.9 9.2 14.6 18.1 23.6 18.1h39v-0.6c27.6 0 52.1 22.9 52.1 52.2v65.8c0 29.5-22.9 53-51.6 53H869c-9.3 0-20.8 8.4-23.6 17.4l-0.6 1.5-23 56.1-0.5 0.9c-4.4 8.3-2.4 22.3 4.2 28.8l28.1 28c10 10 15.5 23.3 15.5 37.5s-5.5 27.4-15.5 37.4L807 848.8c-9.9 9.9-23.2 15.5-37.3 15.5h-0.1c-14.2 0-27.4-5.5-37.4-15.5l-28-28c-6.5-6.5-20.8-8.6-28.8-4.2l-0.9 0.5-57.8 23.6c-9.1 2.9-17.8 14.6-17.8 23.6v39.4c-0.2 29.8-23.8 54.6-52.4 54.6zM422.9 803c25.1 8.4 44.2 34.6 44.2 61.4v39.4c0 7.1 6.6 13.7 13.7 13.7h65.8c6.5 0 12.4-6 12.4-13.7v-39.4c0-26.2 19.5-53 44.8-61.4l53.7-22c23.6-12.1 56.2-7.1 74.9 11.6l27.9 28.1c2.4 2.4 5.7 3.8 9.2 3.8 3.5 0 6.7-1.4 9.1-3.8l46.7-46.6c2.4-2.4 3.8-5.7 3.8-9.2 0-3.5-1.3-6.8-3.8-9.2l-28-27.9c-18.6-18.6-23.7-51.2-11.7-74.9l22-53.5C816 574.3 842.7 555 869 555h39.5c7.7 0 10.8-7.1 10.8-13.2V476c0-6.8-5.1-12-11.2-12.3v1.5h-39c-26.2 0-53-20.1-61.4-45.6l-22-54.1c-11.9-23.6-6.9-56.4 11.7-75l28.1-28.1c2.4-2.4 3.8-5.8 3.8-9.3 0-3.5-1.3-6.7-3.8-9.2l-46.6-46.5c-2.5-2.5-5.7-3.7-9.2-3.7-3.5 0-6.7 1.3-9.1 3.7l-28.1 28c-18.7 18.7-51.3 23.7-74.8 11.7l-53.7-22c-25.3-8.4-44.8-35.2-44.8-61.5v-39.5c0-7.2-5.5-12.2-12.4-12.2H481c-7.5 0-13.7 5.5-13.7 12.2v39.5c0 27-19.1 53.2-44.2 61.5L369.7 237c-23.8 12.1-55.7 7.2-74.7-11.7l-28.1-28c-2.4-2.4-5.7-3.8-9.1-3.8-3.5 0-6.7 1.3-9.1 3.7l-46.6 46.5c-2.4 2.4-3.8 5.7-3.8 9.2 0 3.5 1.3 6.7 3.8 9.1l28 28.1c18.7 18.6 23.7 51.3 11.8 74.8l-22.1 54.7c-8.4 25.6-35.2 45.7-61.5 45.7h-39.5c-6.6 0-13 3.4-13 10.8v65.8c0 6.9 5.7 13.3 12.9 13.3h39.5c26.3 0 53.1 19.3 61.4 44.4l22.1 53.5c12 23.7 6.9 56.3-11.8 74.9l-28 27.9c-5 5.1-5 13.3 0 18.4l46.6 46.5c2.4 2.5 5.7 3.8 9.1 3.8 3.5 0 6.7-1.3 9.1-3.8l28.1-28.1c18.6-18.7 51.3-23.7 74.8-11.6l53.3 21.9z"  ></path><path d="M514.5 728.2c-120.3 0-218.3-97.9-218.3-218.3s97.9-218.3 218.3-218.3 218.3 97.9 218.3 218.3-97.9 218.3-218.3 218.3z m0-396.6c-98.3 0-178.3 80-178.3 178.3s80 178.3 178.3 178.3 178.3-80 178.3-178.3-79.9-178.3-178.3-178.3z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M305.60978517 895.35825372l385.68275683-382.18389083-384.06789581-387.56676269a37.32124394 37.32124394 0 0 1 52.93157168-52.57271338L768.44703623 484.91428643c0.71771661 0.62800137 0.89714531 1.52514668 1.4354332 2.15314892a37.14181435 37.14181435 0 0 1 0.26914307 53.02128603L358.09278418 948.37954063A37.32124394 37.32124394 0 1 1 305.60978517 895.44796894z"  ></path></symbol></svg>'
    var script = function () {
        var scripts = document.getElementsByTagName("script")
        return scripts[scripts.length - 1]
    }()
    var shouldInjectCss = script.getAttribute("data-injectcss")
    var ready = function (fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
                setTimeout(fn, 0)
            } else {
                var loadFn = function () {
                    document.removeEventListener("DOMContentLoaded", loadFn, false)
                    fn()
                }
                document.addEventListener("DOMContentLoaded", loadFn, false)
            }
        } else if (document.attachEvent) {
            IEContentLoaded(window, fn)
        }

        function IEContentLoaded(w, fn) {
            var d = w.document, done = false, init = function () {
                if (!done) {
                    done = true
                    fn()
                }
            }
            var polling = function () {
                try {
                    d.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(polling, 50)
                    return
                }
                init()
            }
            polling()
            d.onreadystatechange = function () {
                if (d.readyState == "complete") {
                    d.onreadystatechange = null
                    init()
                }
            }
        }
    }
    var before = function (el, target) {
        target.parentNode.insertBefore(el, target)
    }
    var prepend = function (el, target) {
        if (target.firstChild) {
            before(el, target.firstChild)
        } else {
            target.appendChild(el)
        }
    }

    function appendSvg() {
        var div, svg
        div = document.createElement("div")
        div.innerHTML = svgSprite
        svgSprite = null
        svg = div.getElementsByTagName("svg")[0]
        if (svg) {
            svg.setAttribute("aria-hidden", "true")
            svg.style.position = "absolute"
            svg.style.width = 0
            svg.style.height = 0
            svg.style.overflow = "hidden"
            prepend(svg, document.body)
        }
    }

    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
        window.__iconfont__svg__cssinject__ = true
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }
    ready(appendSvg)
})(window)