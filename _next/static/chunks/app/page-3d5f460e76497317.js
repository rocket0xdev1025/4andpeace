(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    3489: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => h });
      var l = a(5155),
        s = a(2115),
        i = a(5239),
        n = a(6676),
        r = a(6497),
        c = a(905);
      function o() {
        return (0, l.jsxs)("section", {
          className:
            "bg-[#F1B70C] h-full px-16 py-[10%] flex flex-col justify-center",
          children: [
            (0, l.jsx)(c.P.h1, {
              className: "text-black mama-bear text-3xl mb-2",
              animate: {
                y: [0, -12, 0],
                rotateX: [0, 1, 0],
                rotateY: [0, 2, 0],
              },
              transition: { duration: 6, repeat: 1 / 0, ease: "easeInOut" },
              children: "WHAT IS 4 and Peace?",
            }),
            (0, l.jsx)(c.P.p, {
              className: "single-day text-black text-xl !leading-[100%]",
              animate: {
                y: [0, -6, 0],
                rotateX: [0, 0.5, 0],
                rotateY: [0, 1, 0],
              },
              transition: { duration: 8, repeat: 1 / 0, ease: "easeInOut" },
              children:
                "4 and Peace ($CZBOOK) is a meme token inspired by Binance’s legendary “book” moment. It celebrates the culture, humor, and community of crypto while carrying forward the spirit of that iconic tweet. Simple, fun, and community-driven it’s more than just a token, it’s a story.",
            }),
          ],
        });
      }
      var d = a(1407);
      function x(e) {
        let {
            src: t = "/abc.png",
            width: a = 500,
            height: s = 500,
            alt: n = "img",
            amplitude: r = 12,
            tilt: o = 2,
            duration: x = 6,
            className: h = "",
          } = e,
          m = (0, d.I)();
        return (0, l.jsx)(c.P.div, {
          className: h + " transform-gpu will-change-transform overflow-hidden",
          style: { perspective: 900 },
          animate: m
            ? { y: 0, rotateX: 0, rotateY: 0, scale: 1 }
            : {
                y: [0, -r, 0, -(0.65 * r), 0],
                rotateX: [0, o, 0, 0.5 * o, 0],
                rotateY: [0, -o, 0, -(0.5 * o), 0],
                scale: [1, 1.015, 1, 1.01, 1],
              },
          transition: {
            duration: x,
            times: [0, 0.35, 0.6, 0.85, 1],
            ease: "easeInOut",
            repeat: 1 / 0,
          },
          children: (0, l.jsx)(i.default, {
            src: t,
            width: a,
            height: s,
            alt: n,
            className: "object-cover w-full h-full",
          }),
        });
      }
      function h() {
        let e = (0, s.useRef)(null),
          t = (0, s.useRef)(null),
          [a, d] = (0, s.useState)(!1),
          [h, m] = (0, s.useState)(!1),
          [f, u] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = setTimeout(() => d(!0), 2500);
            return () => clearTimeout(e);
          }, []),
          (0, l.jsxs)("div", {
            className:
              "bg-[url('/page-bg.png')] h-[90vh] md:h-[100vh] w-screen flex flex-col items-center justify-center overflow-hidden relative",
            style: {
              backgroundSize: "cover",
              backgroundPosition: "bottom center",
            },
            children: [
              (0, l.jsx)(r.N, {
                children:
                  !a &&
                  (0, l.jsx)(c.P.div, {
                    initial: { opacity: 1 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0, transition: { duration: 0.35 } },
                    className:
                      "absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",
                    children: (0, l.jsx)("div", {
                      className: "flex flex-col items-center gap-4",
                      children: (0, l.jsx)(i.default, {
                        src: "/tokenomics.gif",
                        alt: "logo",
                        width: 180,
                        height: 180,
                      }),
                    }),
                  }),
              }),
              (0, l.jsxs)("div", {
                className:
                  "flex items-center gap-2 absolute top-8 right-8 md:right-6",
                children: [
                  (0, l.jsx)("a", {
                    href: "https://x.com/fourandpeace_x",
                    children: (0, l.jsx)(i.default, {
                      src: "/x.svg",
                      alt: "logo",
                      width: 50,
                      height: 50,
                      className:
                        "drop-shadow-[10px_10px_20px_0px_#00000040]  transition-transform duration-300 hover:scale-110 hover:-translate-y-1",
                    }),
                  }),
                  (0, l.jsx)("a", {
                    href: "https://t.me/fourandpeace",
                    children: (0, l.jsx)(i.default, {
                      src: "/tg.svg",
                      alt: "logo",
                      width: 50,
                      height: 50,
                      className:
                        "transition-transform duration-300 hover:scale-110 hover:-translate-y-1",
                    }),
                  }),
                  (0, l.jsx)("a", {
                    href: "https://www.dextools.io/app/en/bnb/pair-explorer/0xcomingsoon",
                    children: (0, l.jsx)(i.default, {
                      src: "/unknown.svg",
                      alt: "logo",
                      width: 50,
                      height: 50,
                      className:
                        "transition-transform duration-300 hover:scale-110 hover:-translate-y-1",
                    }),
                  }),
                  (0, l.jsxs)("a", {
                    href: "https://pancakeswap.finance/swap?outputCurrency=0xcomingsoon",
                    className:
                      "border-2 border-[#F0B912] rounded-full px-8 py-2 text-[#F0B912] transition-transform duration-300 hover:scale-105 hover:-translate-y-1 relative",
                    children: [
                      (0, l.jsx)(i.default, {
                        src: "/neon.png",
                        alt: "logo",
                        width: 120,
                        height: 5,
                        className: "absolute left-2 top-[-140%]",
                      }),
                      "BUY\xa0$CZBOOK",
                    ],
                  }),
                ],
              }),
              (0, l.jsx)("h1", {
                className: "text-5xl text-white mama-bear mb-8",
                children: "4 and Peace",
              }),
              (0, l.jsxs)("div", {
                className:
                  "flex gap-4 mb-4 absolute w-full justify-between px-[10%] top-1/2 -translate-y-1/2 z-10 hidden md:flex",
                children: [
                  (0, l.jsx)("button", {
                    onClick: () => {
                      var t;
                      null == (t = e.current) || t.pageFlip().flipPrev();
                    },
                    className:
                      "px-4 py-2 cursor-pointer transition-transform duration-300 hover:-translate-x-2 hover:scale-110 hover:-translate-x-6 hover:-rotate-10",
                    "aria-label": "Previous page",
                    children: (0, l.jsx)(i.default, {
                      src: "/left-arrow.png",
                      alt: "arrow",
                      width: 100,
                      height: 20,
                      className: "pointer-events-none",
                    }),
                  }),
                  (0, l.jsx)("button", {
                    onClick: () => {
                      var t;
                      null == (t = e.current) || t.pageFlip().flipNext();
                    },
                    className:
                      "px-4 py-2 cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:scale-110 hover:translate-x-6 hover:rotate-10",
                    "aria-label": "Next page",
                    children: (0, l.jsx)(i.default, {
                      src: "/left-arrow.png",
                      alt: "arrow",
                      width: 100,
                      height: 20,
                      className: "scale-x-[-1] pointer-events-none",
                    }),
                  }),
                ],
              }),
              !h &&
                (0, l.jsx)("button", {
                  onClick: () => {
                    e.current && e.current.pageFlip().flipNext(), m(!0);
                  },
                  className:
                    "absolute hidden  md:block bottom-16  z-20 px-6 py-3 bg-[#F1B70C] text-black mama-bear text-xl rounded-lg shadow-lg hover:scale-105 transition-transform duration-300",
                  children: "Open Book",
                }),
              !f &&
                (0, l.jsx)("button", {
                  onClick: () => {
                    t.current && t.current.pageFlip().flipNext(), u(!0);
                  },
                  className:
                    "absolute block  md:hidden bottom-16  z-20 px-6 py-3 bg-[#F1B70C] text-black mama-bear text-xl rounded-lg shadow-lg hover:scale-105 transition-transform duration-300",
                  children: "Open Book",
                }),
              (0, l.jsxs)(n.A, {
                ref: e,
                width: 380,
                height: 433,
                showCover: !0,
                mobileScrollSupport: !1,
                className: "book-container !hidden md:!block",
                startPage: 0,
                drawShadow: !0,
                flippingTime: 1500,
                startZIndex: 0,
                autoSize: !0,
                maxShadowOpacity: 0.5,
                showPageCorners: !0,
                disableFlipByClick: !1,
                clickEventForward: !0,
                useMouseEvents: !0,
                swipeDistance: 30,
                onInit: () => d(!0),
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "demoPage flex items-center justify-center h-screen bg-gray-100",
                    children: (0, l.jsx)("div", {
                      className: "perspective-1000",
                      children: (0, l.jsx)(i.default, {
                        src: "/cover-page.png",
                        width: 500,
                        height: 500,
                        alt: "img",
                        className:
                          "shadow-2xl transform transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-6 hover:scale-110",
                      }),
                    }),
                  }),
                  (0, l.jsx)("div", { children: (0, l.jsx)(o, {}) }),
                  (0, l.jsx)("div", {
                    className:
                      "bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)] overflow-hidden",
                    children: (0, l.jsx)(x, {
                      src: "/abc.png",
                      width: 500,
                      height: 500,
                      alt: "img",
                      amplitude: 12,
                      tilt: 10,
                      duration: 6,
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)] px-24 py-[12%]",
                    children: (0, l.jsx)(i.default, {
                      src: "/bnb.png",
                      width: 500,
                      height: 500,
                      alt: "img",
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "bg-[url(/about-bg.png)] bg-cover bg-center h-full px-16 py-[15%] flex flex-col justify-center",
                    children: [
                      (0, l.jsx)("h1", {
                        className: "text-black mama-bear text-3xl mb-2",
                        children: "About bnb book",
                      }),
                      (0, l.jsx)("p", {
                        className:
                          "single-day text-black text-xl !leading-[100%]",
                        children:
                          "4 and Peace ($CZBOOK) is a community-driven meme token on BNB Chain, blending fun, memes, and crypto vibes. We’re here to write a new chapter in meme coin history — with laughs, unity, and\xa0moon\xa0missions.",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)] px-3 overflow-hidden",
                    children: [
                      (0, l.jsx)("h1", {
                        className:
                          "text-[#F1B80B] mama-bear text-3xl mb-6 text-center mt-4",
                        children: "THE VIRAL TWEET",
                      }),
                      (0, l.jsx)(i.default, {
                        src: "/man.png",
                        width: 500,
                        height: 500,
                        alt: "img",
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "bg-black px-4 py-[2%] flex flex-col justify-center relative w-full h-full",
                    children: (0, l.jsx)(i.default, {
                      src: "/ss.png",
                      alt: "ss",
                      width: 700,
                      height: 300,
                      className: "absolute md:right-10 right-5 !max-w-[80%]",
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "bg-[#F1B70C] h-full px-16 py-[2%] pl-36 flex flex-col justify-center relative",
                    children: [
                      (0, l.jsx)(i.default, {
                        src: "/bnb-logo.png",
                        alt: "logo",
                        width: 200,
                        height: 200,
                        className: "absolute left-0 w-32 top-26",
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex flex-col justify-center h-full",
                        children: [
                          (0, l.jsx)("h2", {
                            className: "text-black mama-bear text-3xl mb-4",
                            children: "OUR STORY",
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "single-day text-black text-xl !leading-[100%]",
                            children:
                              "It all started with a simple idea — what if memes and crypto could be combined into one powerful book of fun?",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "bg-[#F1B70C] h-full px-16 py-[10%] pr-36 flex flex-col justify-center relative shadow-xl",
                    children: [
                      (0, l.jsx)(i.default, {
                        src: "/bnb-logo.png",
                        alt: "logo",
                        width: 200,
                        height: 200,
                        className: "absolute right-0 w-32 top-26 scale-x-[-1]",
                      }),
                      (0, l.jsx)("div", {
                        className: "flex flex-col justify-center h-full",
                        children: (0, l.jsx)("p", {
                          className:
                            "single-day text-black text-xl !leading-[100%] mt-20",
                          children:
                            "That’s how 4 and Peace ($CZBOOK) was born. From community jokes to a real token, we’ve grown into a project that unites people with laughter, creativity, and the dream of going to the\xa0moon\xa0together.",
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)] h-full px-16 py-[10%] flex flex-col justify-center",
                    children: (0, l.jsx)("div", {
                      className: "flex items-center justify-center h-full",
                      children: (0, l.jsx)(i.default, {
                        src: "/tokenomics.gif",
                        alt: "token",
                        width: 300,
                        height: 300,
                      }),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "bg-[#F1B70C] h-full px-16 flex flex-col justify-center relative shadow-xl",
                    children: (0, l.jsxs)("div", {
                      className: "flex flex-col justify-center h-full",
                      children: [
                        (0, l.jsx)("h2", {
                          className: "text-black mama-bear text-3xl mb-4",
                          children: "Tokenomics",
                        }),
                        (0, l.jsxs)("p", {
                          className:
                            "single-day text-black text-xl !leading-[100%]",
                          children: [
                            "Total Supply: 1 Billion",
                            (0, l.jsx)("br", {}),
                            // "Contract: Renounced",
                            // (0, l.jsx)("br", {}),
                            // "Buy/Sell Tax: 0/0%",
                            // (0, l.jsx)("br", {}),
                            // "LP Tokens: Burnt",
                            (0, l.jsx)("br", {}),
                            "CA: 0xcomingsoon",
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "bg-[#0A0A0A] h-full px-16 py-[10%] flex flex-col justify-center",
                    children: (0, l.jsx)("div", {
                      className: "flex items-center justify-center h-full",
                      children: (0, l.jsx)(i.default, {
                        src: "/coins.png",
                        alt: "token",
                        width: 300,
                        height: 300,
                      }),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "bg-[#F1B70C] h-full px-16 flex flex-col justify-center relative shadow-xl",
                    children: (0, l.jsxs)("div", {
                      className: "flex flex-col justify-center h-full",
                      children: [
                        (0, l.jsx)("h2", {
                          className: "text-black mama-bear text-3xl mb-4",
                          children: "HOW TO BUY",
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "single-day text-black text-xl !leading-[100%]",
                          children: "Set up a wallet –",
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "single-day text-[#4C4C4C] text-xl !leading-[100%] mb-4",
                          children:
                            "Install a BNB Chain–compatible wallet like MetaMask or Trust Wallet, and fund it with BNB for gas + purchase.",
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "single-day text-black text-xl !leading-[100%]",
                          children: "Connect to DEX –",
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "single-day text-[#4C4C4C] text-xl !leading-[100%] mb-4",
                          children:
                            "Go to a decentralized exchange (DEX) such as PancakeSwap, switch network to BNB Smart Chain, and connect your wallet.",
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "single-day text-black text-xl !leading-[100%]",
                          children: "Swap for $CZBOOK –",
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "single-day text-[#4C4C4C] text-xl !leading-[100%]",
                          children:
                            "Paste the official $CZBOOK contract address, enter the amount of BNB you want to swap, confirm the trade, and approve in your wallet.",
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "bg-[#0A0A0A] h-full flex flex-col justify-center",
                    children: (0, l.jsx)("div", {
                      className:
                        "flex items-center justify-center h-full overflow-hidden",
                      children: (0, l.jsx)(i.default, {
                        src: "/the-end.png",
                        alt: "token",
                        width: 400,
                        height: 300,
                        className: "w-full",
                      }),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "bg-[#F1B70C] h-full px-16 flex flex-col justify-center relative shadow-xl",
                    children: (0, l.jsxs)("div", {
                      className: "flex flex-col justify-center h-full",
                      children: [
                        (0, l.jsx)("h2", {
                          className: "text-black mama-bear text-3xl mb-4",
                          children: "Join Us",
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "mama-bear text-black text-lg !leading-[100%]",
                          children: "Buy Now:",
                        }),
                        (0, l.jsx)("a", {
                          href: "https://pancakeswap.finance/swap?outputCurrency=0xcomingsoon",
                          className:
                            "single-day text-[#4C4C4C] text-xl !leading-[100%] mb-8",
                          children: "→ PancakeSwap",
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "mama-bear text-black text-lg !leading-[100%]",
                          children: "telegram",
                        }),
                        (0, l.jsx)("a", {
                          href: "https://t.me/fourandpeace",
                          className:
                            "single-day text-[#4C4C4C] text-xl !leading-[100%] mb-8",
                          children: "→ @fourandpeace_cz",
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "single-day text-black text-xl !leading-[100%]",
                          children: "twitter:",
                        }),
                        (0, l.jsx)("a", {
                          href: "https://x.com/fourandpeace_x",
                          className:
                            "single-day text-[#4C4C4C] text-xl !leading-[100%]",
                          children: "→ @fourandpeace_cz",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "w-full px-2",
                children: (0, l.jsxs)(n.A, {
                  ref: t,
                  width: 380,
                  height: 483,
                  size: "stretch",
                  usePortrait: !0,
                  showCover: !0,
                  mobileScrollSupport: !1,
                  className: "book-container md:!hidden !block",
                  startPage: 0,
                  drawShadow: !0,
                  flippingTime: 1500,
                  startZIndex: 0,
                  autoSize: !0,
                  maxShadowOpacity: 0.5,
                  showPageCorners: !0,
                  disableFlipByClick: !1,
                  clickEventForward: !0,
                  useMouseEvents: !0,
                  swipeDistance: 30,
                  onInit: () => d(!0),
                  children: [
                    (0, l.jsx)("div", {
                      className: "demoPage bg-black",
                      children: (0, l.jsx)("div", {
                        className: "flex items-center justify-center h-full",
                        children: (0, l.jsx)(i.default, {
                          src: "/cover-page.png",
                          width: 500,
                          height: 500,
                          alt: "img",
                        }),
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "bg-[#F1B70C] h-full px-4 py-[3%] flex flex-col justify-center",
                      children: [
                        (0, l.jsx)("h1", {
                          className: "text-black mama-bear text-md mb-2",
                          children: "WHAT IS 4 and Peace?",
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "single-day text-black text-sm !leading-[100%]",
                          children:
                            "4 and Peace ($CZBOOK) is a meme token inspired by Binance’s legendary “book” moment. It celebrates the culture, humor, and community of crypto while carrying forward the spirit of that iconic tweet. Simple, fun, and community-driven it’s more than just a token,\xa0it’s\xa0a\xa0story.",
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)]",
                      children: (0, l.jsx)("div", {
                        className:
                          "flex items-center justify-center h-full overflow-hidden",
                        children: (0, l.jsx)(i.default, {
                          src: "/abc.png",
                          width: 500,
                          height: 500,
                          alt: "img",
                          className: "w-full",
                        }),
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)] px-6",
                      children: (0, l.jsx)("div", {
                        className: "flex items-center justify-center h-full",
                        children: (0, l.jsx)(i.default, {
                          src: "/bnb.png",
                          width: 500,
                          height: 500,
                          alt: "img",
                        }),
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "bg-[url(/about-bg.png)] bg-cover bg-center h-full px-6 py-[5%] flex flex-col justify-center",
                      children: [
                        (0, l.jsx)("h1", {
                          className: "text-black mama-bear text-md mb-2",
                          children: "About bnb book",
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "single-day text-black text-sm !leading-[100%]",
                          children:
                            "4 and Peace ($CZBOOK) is a community-driven meme token on BNB Chain, blending fun, memes, and crypto vibes. We’re here to write a new chapter in meme coin history — with laughs, unity, and\xa0 moon\xa0missions.",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)] px-2 py-[2%] overflow-hidden",
                      children: [
                        (0, l.jsx)("h1", {
                          className:
                            "text-[#F1B80B] mama-bear text-md mb-6 text-center mt-4",
                          children: "THE VIRAL TWEET",
                        }),
                        (0, l.jsx)(i.default, {
                          src: "/man.png",
                          width: 500,
                          height: 500,
                          alt: "img",
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "bg-[#F1B80B] px-4 py-[5%] flex flex-col justify-center relative",
                      children: (0, l.jsx)(i.default, {
                        src: "/ss.png",
                        alt: "ss",
                        width: 700,
                        height: 300,
                        className: "absolute md:right-10 right-5 w-[80%]",
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "bg-[#F1B70C] h-full px-6 py-[3%] pl-10 flex flex-col justify-center relative",
                      children: [
                        (0, l.jsx)(i.default, {
                          src: "/bnb-logo.png",
                          alt: "logo",
                          width: 200,
                          height: 200,
                          className: "absolute left-0 w-10 top-22",
                        }),
                        (0, l.jsxs)("div", {
                          className: "flex flex-col justify-center h-full",
                          children: [
                            (0, l.jsx)("h2", {
                              className: "text-black mama-bear text-md mb-2",
                              children: "OUR STORY",
                            }),
                            (0, l.jsx)("p", {
                              className:
                                "single-day text-black text-sm !leading-[100%]",
                              children:
                                "It all started with a simple idea — what if memes and crypto could be combined into one powerful book of fun?",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "bg-[#F1B70C] h-full px-6 py-[3%] pr-12 flex flex-col justify-center relative shadow-xl",
                      children: [
                        (0, l.jsx)(i.default, {
                          src: "/bnb-logo.png",
                          alt: "logo",
                          width: 200,
                          height: 200,
                          className:
                            "absolute right-0 w-10 top-22 scale-x-[-1]",
                        }),
                        (0, l.jsx)("div", {
                          className: "flex flex-col justify-center h-full",
                          children: (0, l.jsx)("p", {
                            className:
                              "single-day text-black text-sm !leading-[100%] mt-8",
                            children:
                              "That’s how 4 and Peace ($CZBOOK) was born. From community jokes to a real token, we’ve grown into a project that unites people with laughter, creativity, and the dream of going to the\xa0moon\xa0together.",
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)] h-full px-6 py-[2%] flex flex-col justify-center",
                      children: (0, l.jsx)("div", {
                        className: "flex items-center justify-center h-full",
                        children: (0, l.jsx)(i.default, {
                          src: "/tokenomics.gif",
                          alt: "token",
                          width: 500,
                          height: 500,
                        }),
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "bg-[#F1B70C] h-full px-6 flex flex-col justify-center relative shadow-xl",
                      children: (0, l.jsxs)("div", {
                        className: "flex flex-col justify-center h-full",
                        children: [
                          (0, l.jsx)("h2", {
                            className: "text-black mama-bear text-md mb-4",
                            children: "Tokenomics",
                          }),
                          (0, l.jsxs)("p", {
                            className:
                              "single-day text-black text-sm !leading-[100%]",
                            children: [
                              "Total Supply: 1 Billion",
                              (0, l.jsx)("br", {}),
                              "Contract: Renounced",
                              (0, l.jsx)("br", {}),
                              "Buy/Sell Tax: 0/0%",
                              (0, l.jsx)("br", {}),
                              "LP Tokens: Burnt",
                              (0, l.jsx)("br", {}),
                              "CA: 0xcomingsoon",
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "bg-[#0A0A0A] h-full px-16 py-[10%] flex flex-col justify-center",
                      children: (0, l.jsx)("div", {
                        className: "flex items-center justify-center h-full",
                        children: (0, l.jsx)(i.default, {
                          src: "/coins.png",
                          alt: "token",
                          width: 300,
                          height: 300,
                        }),
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "bg-[#F1B70C] h-full px-4 flex flex-col justify-center relative shadow-xl",
                      children: (0, l.jsxs)("div", {
                        className: "flex flex-col justify-center h-full",
                        children: [
                          (0, l.jsx)("h2", {
                            className: "text-black mama-bear text-sm mb-0",
                            children: "HOW TO BUY",
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "single-day text-black text-xs !leading-[100%]",
                            children: "Set up a wallet –",
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "single-day text-[#4C4C4C] text-xs !leading-[100%] mb-0",
                            children:
                              "Install a BNB Chain–compatible wallet like MetaMask or Trust Wallet, and fund it with BNB for gas + purchase.",
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "single-day text-black text-xs !leading-[100%]",
                            children: "Connect to DEX –",
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "single-day text-[#4C4C4C] text-xs !leading-[100%] mb-0",
                            children:
                              "Go to a decentralized exchange (DEX) such as PancakeSwap, switch network to BNB Smart Chain, and connect your wallet.",
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "single-day text-black text-xs !leading-[100%]",
                            children: "Swap for $CZBOOK –",
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "single-day text-[#4C4C4C] text-xs !leading-[100%]",
                            children:
                              "Paste the official $CZBOOK contract address, enter the amount of BNB you want to swap, confirm the trade, and approve in your wallet.",
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "bg-[#0A0A0A] h-full flex flex-col justify-center",
                      children: (0, l.jsx)("div", {
                        className:
                          "flex items-center justify-center h-full overflow-hidden",
                        children: (0, l.jsx)(i.default, {
                          src: "/the-end.png",
                          alt: "token",
                          width: 400,
                          height: 300,
                          className: "w-full",
                        }),
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "bg-[#F1B70C] h-full px-6 flex flex-col justify-center relative shadow-xl",
                      children: (0, l.jsxs)("div", {
                        className: "flex flex-col justify-center h-full",
                        children: [
                          (0, l.jsx)("h2", {
                            className: "text-black mama-bear text-md mb-2",
                            children: "Join Us",
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "mama-bear text-black text-base !leading-[100%]",
                            children: "Buy Now:",
                          }),
                          (0, l.jsx)("a", {
                            href: "https://pancakeswap.finance/swap?outputCurrency=0xcomingsoon",
                            className:
                              "single-day text-[#4C4C4C] text-sm !leading-[100%] mb-2",
                            children: "→ PancakeSwap",
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "mama-bear text-black text-sm !leading-[100%]",
                            children: "telegram",
                          }),
                          (0, l.jsx)("a", {
                            href: "https://t.me/@fourandpeace_cz",
                            className:
                              "single-day text-[#4C4C4C] text-xl !leading-[100%] mb-2",
                            children: "→ @fourandpeace_cz",
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "single-day text-black text-sm !leading-[100%]",
                            children: "twitter:",
                          }),
                          (0, l.jsx)("a", {
                            href: "https://x.com/@fourandpeace_cz",
                            className:
                              "single-day text-[#4C4C4C] text-xl !leading-[100%]",
                            children: "→ @fourandpeace_cz",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, l.jsx)("p", {
                className: "single-day text-xl absolute bottom-3",
                children: "\xa9 2025 4 and Peace . All rights reserved.",
              }),
            ],
          })
        );
      }
    },
    5276: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 3489));
    },
  },
  (e) => {
    e.O(0, [206, 441, 255, 358], () => e((e.s = 5276))), (_N_E = e.O());
  },
]);
