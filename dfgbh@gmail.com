[33mcommit 9980f384a7603af8cfb9bce1ff099796b41bcdd8[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m, [m[1;31morigin/master[m[33m)[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Sun Mar 13 11:45:50 2022 +0530

    added code, i have no idea how it works, should research

[33mcommit 3f25a2c856e83602ff1085a25e3377a1298e341d[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Sun Mar 13 10:36:55 2022 +0530

    added auth stated to store using redux toolkit

[33mcommit 1680fdcda2e548cd16f48eb44059906f95f9869c[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Fri Mar 11 08:36:30 2022 +0530

    Readme update

[33mcommit 22e48797d7d920027a259a702c4ad14ccc9c3b78[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Fri Mar 11 08:35:43 2022 +0530

    installed concurrently as deve dependency on outer package.json and create a script to run npm run server, and npm run client scripts parallelly

[33mcommit dd4003baceb9a33187d4b5e75834bdbaa69c1294[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Fri Mar 11 08:27:11 2022 +0530

    completed login and register forms and their states

[33mcommit f301e94fb4b8eb6fc55c2c38217491cf121b8052[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Wed Mar 9 09:22:00 2022 +0530

    completed fe initialsetup, routes and skeleton pages

[33mcommit eddf5d02ab9436df1cae5928f20e624ac5d317c2[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Fri Mar 4 08:55:59 2022 +0530

    route protection, goals routes update

[33mcommit ca8c0c87baf4ec5871fe73be58aca707d72c5eaa[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Wed Mar 2 22:05:13 2022 +0530

    impletemente jwt authentication, protected getMe route using a middle wear function which validates the jwt

[33mcommit 56bfed9023dc27fb2d9e0c160a619a820c0df32f[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Wed Mar 2 20:28:37 2022 +0530

    completed setting up usermodel, user routes and user controller skeleton

[33mcommit ea4cdd1c19e38f20f3546481ace92ebee98ac819[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Wed Mar 2 09:05:23 2022 +0530

    i missed to add readme msg earlier

[33mcommit caf58156bb744b4c398086bb70048bcf12f58e6b[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Wed Mar 2 09:04:30 2022 +0530

    Added goalModel, also implemented all the goalcontrollers in goalController.json. Tested all routes using postman

[33mcommit bf686137790b610050613bb110f798f2b6bae0be[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Tue Mar 1 08:42:42 2022 +0530

    Completed mongodb integration - added readme msg

[33mcommit 4d323ef4c0daf78a3645861b2bb5fbd07918e160[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Tue Mar 1 08:40:49 2022 +0530

    Completed mongodb integration

[33mcommit 5a0acff27bf0b0b3070ff66c3294e2b071e68cd6[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Mon Feb 28 20:34:55 2022 +0530

    updated readme.md

[33mcommit 7cbaca0c84b4fe057afdabd7c76bc646f8c17e72[m
Merge: 05faf4d 6dd8840
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Mon Feb 28 20:33:51 2022 +0530

    Merge branch 'master' of https://github.com/anandhu-co-in/bradsmernstack_crash

[33mcommit 05faf4d8caca1a1b1ed2488ed292797c44db4c69[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Mon Feb 28 20:33:48 2022 +0530

    completed seting goal routes, structured them, overrided default express error handler when using throw new error(), also used a new package express-async-handler to avoid try catch in the goalControllers in upcoming parts

[33mcommit 6dd8840aa66558296ebb7f913c586c38935bc468[m
Author: anandhukrishnan.v <37325402+anandhu-co-in@users.noreply.github.com>
Date:   Mon Feb 28 20:29:49 2022 +0530

    Create README.md

[33mcommit b1ba89633b32b613aabc52f0c54b548615dcfcb5[m
Author: codeandcoins <mail.anandhu@gmail.com>
Date:   Wed Feb 23 09:13:34 2022 +0530

    Initial commit
