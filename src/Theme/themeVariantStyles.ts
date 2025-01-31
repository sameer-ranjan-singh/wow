export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
  WOW = "wow",
  SAASY = "sassy",
  ALPHA = "alpha",
}

export interface ThemeVariantProps {
  header: {
    text_color_primary: string;
    text_color_secondary: string;
    bgSolid: string;
    bgGradient: string;
    title: string;
    btn: {
      bgSolid: string;
      text: string;
    };
  };
  intro: {
    text_color_primary: string;
    bgSolid: string;
    bgGradient: string;
    title1: string;
    title2: string;
    span1: string;
    span2: string;
    description: string;
    btn: {
      bgPrimary: string;
      bgSecondary: string;
      textPrimary: string;
      textSecondary: string;
      borderPrimary: string;
      borderSecondary: string;
    };
  };
  features: {
    text_color_primary: string;
    bgSolid: string;
    bgGradient: string;
    title: string;
    span: string;
    description: string;
    card: {
      border: string;
      title: string;
      description: string;
      bgGradient: string;
    };
  };
  hookFeature: {
    bgSolid: string;
    bgGradient: string;
    title: string;
    description: string;
  };
  services: {
    title: string;
    description: string;
    bgSolid: string;
    bgGradient: string;
    card: {
      bgGradient: string;
      border: string;
      title: string;
      description: string;
      btn: {
        bgSolid: string;
        text: string;
      };
    };
  };
  price: {
    title: string;
    description: string;
    bgSolid: string;
    bgGradient: string;
    card: {
      bgGradient: string;
      border: string;
      title: string;
      description: string;
      text_color_primary: string;
      text_color_secondary: string;
      btn: {
        bgSolid: string;
        text: string;
      };
    };
  };
  testimonial: {
    bgSolid: string;
    bgGradient: string;
    title: string;
    description: string;
    card: {
      bgGradient: string;
      border: string;
      title: string;
      span: string;
      description: string;
    };
  };
  footer: {
    title1: string;
    description: string;
  };
}

export const themeVariantStyles: Record<ThemeEnum, ThemeVariantProps> = {
  light: {
    header: {
      text_color_primary: "text-blue-600",
      text_color_secondary: "text-gray-600",
      bgSolid: "bg-white",
      bgGradient: "bg-gradient-to-b from-white to-gray-100 bg-opacity-30",
      title: "text-neutral-800",
      btn: {
        bgSolid: "bg-blue-500 hover:bg-blue-700 ",
        text: "text-black",
      },
    },
    intro: {
      text_color_primary: "text-neutral-700",
      bgSolid: "bg-white",
      bgGradient: "bg-gradient-to-br from-gray-100 to-blue-50",
      title1: "gradient-title from-gray-500 to-black",
      title2: "gradient-title from-purple-500 to-purple-600",
      span1: "gradient-title from-blue-500 to-blue-700",
      span2: "text-blue-600",
      description: "text-gray-400",
      btn: {
        bgPrimary:
          "shadow-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 hover:text-white duration-300 ",
        bgSecondary: "hover:shadow-lg ",
        textPrimary: "text-blue-100",
        textSecondary: "text-blue-700 hover:text-blue-900",
        borderPrimary: "",
        borderSecondary: "border-2 border-blue-300 hover:border-blue-900 ",
      },
    },
    features: {
      text_color_primary: "text-gray-800",
      bgSolid: "bg-white",
      bgGradient: "bg-gradient-to-t from-gray-100 to-blue-50",
      title: " text-gray-800",
      span: "text-blue-500",
      description: "text-gray-500",
      card: {
        border: " border-l-4 border-blue-500",
        title: "text-neutral-800",
        description: "text-gray-400",
        bgGradient: "bg-gradient-to-r from-white to-gray-100",
      },
    },
    hookFeature: {
      bgSolid: "bg-white",
      bgGradient: "bg-gradient-to-b from-gray-100 to-white",
      title: "text-blue-600",
      description: "text-gray-500",
    },
    services: {
      title: "gradient-title from-gray-500 to-black",
      description: "text-gray-700",
      bgSolid: "bg-white",
      bgGradient: "bg-gradient-to-t from-gray-50 to-white",
      card: {
        bgGradient:
          "bg-gradient-to-r from-white to-blue-50 hover:bg-gradient-to-b hover:to-blue-100",
        border: "border-gray-200",
        title: "text-gray-800",
        description: "text-gray-400",
        btn: {
          bgSolid:
            "text-white font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 ",
          text: "text-white",
        },
      },
    },
    price: {
      title: "gradient-title from-lime-700 to-gray-900",
      description: "text-gray-700",
      bgSolid: "bg-lime-100",
      bgGradient: "bg-gradient-to-b from-lime-50 to-lime-50",
      card: {
        bgGradient: "bg-lime-100",
        border: "hover:border hover:border-lime-400",
        title: "text-lime-600",
        description: "text-neutral-600",
        text_color_primary: "text-green-900",
        text_color_secondary: "text-gray-500",
        btn: {
          bgSolid:
            "transition ease-in-out delay-150 bg-lime-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 ",
          text: "text-white",
        },
      },
    },
    testimonial: {
      bgSolid: "bg-white",
      bgGradient: "bg-gradient-to-r from-gray-50 to-white",
      title: "text-gray-800",
      description: "text-gray-700",
      card: {
        bgGradient: "bg-gradient-to-r from-white to-gray-100",
        border: "border-gray-200",
        title: "text-gray-800",
        span: "text-blue-500",
        description: "text-gray-600",
      },
    },
    footer: {
      title1: "text-gray-800",
      description: "text-gray-600",
    },
  },
  dark: {
    header: {
      text_color_primary: "text-white",
      text_color_secondary: "text-gray-400",
      bgSolid: "bg-gray-900",
      bgGradient: "m-4 rounded-full w-3/5 md:max-w-3xl bg-gradient-to-b from-gray-700 to-gray-900 shadow-lg",
      title: "text-white",
      btn: {
        bgSolid: "bg-blue-500 hover:bg-blue-700",
        text: "text-black",
      },
    },
    intro: {
      text_color_primary: "text-gray-300",
      bgSolid: "bg-gray-900",
      bgGradient: "bg-gradient-to-b from-gray-800 to-gray-900",
      title1: "gradient-title from-gray-300 to-gray-100",
      title2: "gradient-title from-purple-300 to-purple-400",
      span1: "gradient-title from-blue-300 to-blue-500",
      span2: "text-blue-400",
      description: "text-gray-500",
      btn: {
        bgPrimary:
          "shadow-lg transition ease-in-out delay-150 bg-gray-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-white duration-300 ",
        bgSecondary: "hover:shadow-md hover:shadow-gray-500 ",
        textPrimary: "text-neutral-700",
        textSecondary: "text-gray-400 hover:text-gray-300",
        borderPrimary: "",
        borderSecondary: "border-2 border-gray-400 hover:border-gray-300 ",
      },
    },
    features: {
      text_color_primary: "text-white",
      bgSolid: "bg-gray-900",
      bgGradient: "bg-gradient-to-b from-gray-900 to-gray-800",
      title: "text-white",
      span: "text-blue-300",
      description: "text-gray-400",
      card: {
        border: " border-l-4 border-blue-300",
        title: "text-white",
        description: "text-gray-300",
        bgGradient: "bg-gradient-to-r from-gray-900 to-gray-800",
      },
    },
    hookFeature: {
      bgSolid: "bg-gray-900",
      bgGradient: "bg-gradient-to-b from-gray-800 to-gray-900",
      title: "text-blue-300",
      description: "text-gray-400",
    },
    services: {
      title: "gradient-title from-gray-300 to-gray-100",
      description: "text-gray-300",
      bgSolid: "bg-gray-900",
      bgGradient: "bg-gradient-to-t from-gray-800 to-gray-900",
      card: {
        bgGradient: "bg-gradient-to-r from-gray-900 to-gray-800",
        border: "border-gray-700",
        title: "text-white",
        description: "text-gray-300",
        btn: {
          bgSolid:
            "text-white font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 ",
          text: "text-white",
        },
      },
    },
    price: {
      title: "gradient-title from-lime-900 to-gray-500",
      description: "text-gray-300",
      bgSolid: "bg-lime-800",
      bgGradient: "bg-gradient-to-b from-lime-500 to-lime-600",
      card: {
        bgGradient: "bg-lime-900",
        border: "hover:border hover:border-lime-600",
        title: "text-lime-300",
        description: "text-gray-400",
        text_color_primary: "text-lime-100",
        text_color_secondary: "text-gray-400",
        btn: {
          bgSolid:
            "transition ease-in-out delay-150 bg-lime-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 ",
          text: "text-white",
        },
      },
    },
    testimonial: {
      bgSolid: "bg-gray-900",
      bgGradient: "bg-gradient-to-r from-gray-800 to-gray-900",
      title: "text-white",
      description: "text-gray-400",
      card: {
        bgGradient: "bg-gradient-to-r from-gray-900 to-gray-800",
        border: "border-gray-700",
        title: "text-white",
        span: "text-blue-300",
        description: "text-gray-300",
      },
    },
    footer: {
      title1: "text-white",
      description: "text-gray-400",
    },
  },
  wow: {
    header: {
      text_color_primary: "text-white",
      text_color_secondary: "text-gray-100 text-sm",
      bgSolid: "bg-orange-500", // Primary Orange
      bgGradient:
        "m-4 rounded-full w-3/5 md:max-w-3xl bg-gradient-to-b from-orange-400 to-orange-500 shadow-lg",
      title: "text-yellow-200",
      btn: {
        bgSolid:
          "transition ease-in-out delay-150 bg-orange-100 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300",
        text: "text-black",
      },
    },
    intro: {
      text_color_primary: "text-white",
      bgSolid: "bg-orange-400", // Darker Orange
      bgGradient:
        "bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400",
      title1: "gradient-title from-orange-200 to-orange-100", // Light Orange Gradient
      title2: "text-white",
      span1: "gradient-title from-orange-300 to-orange-200", // Light Orange Gradient
      span2: "text-orange-300",
      description: "text-orange-50",
      btn: {
        //w-full md:w-36 flex justify-start md:justify-center items-center gap-2 px-4 py-3 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 text-white font-mono rounded-lg
        bgPrimary:
          "shadow-lg transition ease-in-out delay-150 bg-neutral-900 hover:-translate-y-1 hover:scale-110 hover:bg-neutral-800 hover:text-white duration-300 bg-opacity-70",
        bgSecondary: "shadow-lg hover:bg-orange-500",
        textPrimary: "text-orange-100",
        textSecondary: "text-neutral-700 hover:text-neutral-900",
        borderPrimary: "",
        borderSecondary: "border-2 border-orange-300 hover:border-orange-900 ",
      },
    },
    features: {
      text_color_primary: "text-gray-800", // Secondary Black
      bgSolid: "bg-orange-100", // Light Orange
      bgGradient: "bg-orange-200",
      title: "text-orange-500",
      span: "text-orange-500", // Primary Orange
      description: "text-gray-600",
      card: {
        border: "border-l-4 border-orange-500",
        title: "text-gray-800",
        description: "text-gray-400",
        bgGradient: "bg-gradient-to-br from-orange-50 to-white", // Lighter Gradient
      },
    },
    hookFeature: {
      bgSolid: "bg-orange-200", // Darker Orange
      bgGradient: "bg-gradient-to-b from-orange-200 to-white",
      title: "gradient-title from-orange-500 via-orange-300 to-orange-600", // Light Orange Gradient
      description: "text-gray-800",
    },
    services: {
      title: "gradient-title from-orange-300 to-orange-500", // Light Orange Gradient
      description: "text-gray-700",
      bgSolid: "bg-orange-100", // Light Orange
      bgGradient: "bg-gradient-to-b from-orange-50 to-orange-200 pt-10",
      card: {
        bgGradient: "bg-gradient-to-br from-orange-50 to-white", // Lighter Gradient
        border: "border-orange-400",
        title: "text-gray-800",
        description: "text-gray-600",
        btn: {
          bgSolid:
            "transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 ", // Primary Orange
          text: "text-white",
        },
      },
    },
    price: {
      title: "gradient-title from-orange-600 to-orange-500", // Light Orange Gradient
      description: "text-gray-700",
      bgSolid: "bg-orange-50", // Lightest Orange
      bgGradient:
        "rounded-es-full rounded-ee-full bg-gradient-to-b from-orange-200 from-10% via-orange-50 via-40% to-gray-100",
      card: {
        bgGradient: "bg-gradient-to-br from-white to-orange-50", // Lighter Gradient
        border: "border-orange-400",
        title: "text-gray-800",
        description: "text-gray-600",
        text_color_primary: "text-gray-800",
        text_color_secondary: "text-gray-500",
        btn: {
          bgSolid:
            "transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 ", // Primary Orange
          text: "text-white",
        },
      },
    },
    testimonial: {
      bgSolid: "bg-orange-100", // Light Orange
      bgGradient: "bg-gradient-to-br from-orange-200 to-orange-100",
      title: "text-gray-800",
      description: "text-gray-700",
      card: {
        bgGradient: "bg-gradient-to-br from-orange-50 to-white", // Lighter Gradient
        border: "border-orange-400",
        title: "text-gray-800",
        span: "text-orange-500", // Primary Orange
        description: "text-gray-600",
      },
    },
    footer: {
      title1: "text-gray-800",
      description: "text-gray-600",
    },
  },
  sassy: {
    header: {
      text_color_primary: "text-gray-900", // Dark gray text
      text_color_secondary: "text-gray-500", // Medium gray secondary text
      bgSolid: "bg-white", // White background
      // bgGradient: "bg-gradient-to-b from-white to-gray-100", // Subtle white to light gray gradient
      bgGradient:
        "m-4 rounded-full w-3/5 md:max-w-3xl bg-gradient-to-b from-gray-100 to-white shadow-lg",
      title: "text-gray-900 font-bold", // Dark gray, semi-bold title
      btn: {
        bgSolid: "bg-gray-900 hover:bg-gray-800", // Black button, darker on hover
        text: "text-black", // White text on button
      },
    },
    intro: {
      text_color_primary: "text-gray-800", // Dark gray text
      bgSolid: "bg-gray-100", // Light gray background
      bgGradient: "bg-gradient-to-b from-gray-200 to-gray-100", // Slightly darker gray gradient
      title1: "text-gray-900 font-bold", // Black, bold title
      title2: "text-gray-700 font-semibold", // Darker gray, semi-bold title
      span1: "text-gray-600", // Medium gray accent
      span2: "text-gray-500", // Slightly lighter gray accent
      description: "text-gray-600", // Medium gray description
      btn: {
        bgPrimary: "shadow-lg transition ease-in-out delay-150 bg-gray-900 hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 hover:text-white duration-300", // Black button
        bgSecondary: "hover:shadow-lg border border-gray-300 hover:border-gray-500", // Gray border on hover
        textPrimary: "text-white",
        textSecondary: "text-gray-700 hover:text-gray-900",
        borderPrimary: "",
        borderSecondary: "",
      },
    },
    features: {
      text_color_primary: "text-gray-900",
      bgSolid: "bg-white", // White background
      bgGradient: "bg-gradient-to-t from-gray-100 to-white", // Light gray to white gradient
      title: "text-gray-900 font-semibold",
      span: "text-gray-600", // Medium gray accent
      description: "text-gray-600",
      card: {
        border: "border-l-4 border-gray-500", // Medium gray border
        title: "text-gray-900",
        description: "text-gray-600",
        bgGradient: "bg-gradient-to-r from-white to-gray-50", // White to light gray card background
      },
    },
    hookFeature: {
      bgSolid: "bg-gray-100", // Light gray background
      bgGradient: "bg-gradient-to-b from-gray-200 to-gray-100", // Slightly darker gray gradient
      title: "text-gray-700 font-semibold",
      description: "text-gray-600",
    },
    services: {
      title: "text-gray-900 font-semibold",
      description: "text-gray-600",
      bgSolid: "bg-white", // White background
      bgGradient: "bg-gradient-to-t from-gray-100 to-white", // Light gray to white gradient
      card: {
        bgGradient: "bg-gradient-to-r from-white to-gray-50 hover:bg-gradient-to-b hover:to-gray-100", // White to light gray, hover effect
        border: "border-gray-100",
        title: "text-gray-900",
        description: "text-gray-600",
        btn: {
          bgSolid: "text-white font-semibold transition ease-in-out delay-150 bg-gray-900 hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 duration-300", // Black button
          text: "text-white",
        },
      },
    },
    price: {
      title: "text-gray-900 font-semibold",
      description: "text-gray-600",
      bgSolid: "bg-gray-100", // Light gray background
      bgGradient: "bg-gradient-to-b from-gray-200 to-gray-100", // Slightly darker gray gradient
      card: {
        bgGradient: "bg-white", // White card background
        border: "hover:border hover:border-gray-400",
        title: "text-gray-700 font-semibold",
        description: "text-gray-600",
        text_color_primary: "text-gray-900",
        text_color_secondary: "text-gray-500",
        btn: {
          bgSolid: "transition ease-in-out delay-150 bg-gray-900 hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 duration-300", // Black button
          text: "text-white",
        },
      },
    },
    testimonial: {
      bgSolid: "bg-white", // White background
      bgGradient: "bg-gradient-to-r from-gray-100 to-white", // Light gray to white gradient
      title: "text-gray-900 font-semibold",
      description: "text-gray-600",
      card: {
        bgGradient: "bg-gradient-to-r from-white to-gray-50", // White to light gray card background
        border: "border-gray-100",
        title: "text-gray-900",
        span: "text-gray-600",
        description: "text-gray-600",
      },
    },
    footer: {
      title1: "text-gray-900",
      description: "text-gray-600",
    },
  },
  alpha: {
    header: {
      text_color_primary: "text-gray-900",
      text_color_secondary: "text-gray-500",
      bgSolid: "bg-yellow-400",
      bgGradient: "m-4 rounded-full w-3/5 md:max-w-3xl bg-gradient-to-b from-yellow-100 to-yellow-200 shadow-lg",
      title: "text-gray-900 font-bold",
      btn: {
        bgSolid: "bg-gray-900 hover:bg-gray-800",
        text: "text-orange-600",
      },
    },
    intro: {
      text_color_primary: "text-gray-800",
      bgSolid: "bg-yellow-200", // Slightly darker yellow for intro
      bgGradient: "bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-500", // Blend with header
      title1: "gradient-title from-yellow-100 to-yellow-200", // Darker yellow title
      title2: "text-gray-900 font-bold",
      span1: "gradient-title from-yellow-600 to-yellow-800", // Darker yellow accent
      span2: "text-yellow-600",
      description: "text-gray-700",
      btn: {
        bgPrimary: "shadow-lg transition ease-in-out delay-150 bg-gray-900 hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 hover:text-white duration-300",
        bgSecondary: "hover:shadow-lg border border-yellow-400 hover:border-yellow-600", // Darker yellow border on hover
        textPrimary: "text-white",
        textSecondary: "text-gray-900 hover:text-gray-800",
        borderPrimary: "",
        borderSecondary: "",
      },
    },
    features: {
      text_color_primary: "text-gray-900",
      bgSolid: "bg-yellow-50", // Very light yellow
      bgGradient: "bg-gradient-to-t from-yellow-100 to-yellow-50", // Light yellow gradient
      title: "text-gray-900 font-bold",
      span: "text-yellow-600",
      description: "text-gray-700",
      card: {
        border: "border-l-4 border-yellow-500", // Yellow border
        title: "text-gray-900",
        description: "text-gray-700",
        bgGradient: "bg-gradient-to-r from-white to-yellow-50", // White to light yellow
      },
    },
    hookFeature: {
      bgSolid: "bg-yellow-50",
      bgGradient: "bg-gradient-to-b from-yellow-100 to-yellow-50", // Light yellow gradient
      title: "text-yellow-700 font-bold", // Darker yellow title
      description: "text-gray-700",
    },
    services: {
      title: "text-gray-900 font-bold",
      description: "text-gray-700",
      bgSolid: "bg-yellow-50",
      bgGradient: "bg-gradient-to-t from-yellow-100 to-yellow-50", // Light yellow gradient
      card: {
        bgGradient: "bg-gradient-to-r from-white to-yellow-50 hover:bg-gradient-to-b hover:to-yellow-100", // White to light yellow, hover effect
        border: "border-yellow-100",
        title: "text-gray-900",
        description: "text-gray-700",
        btn: {
          bgSolid: "text-white font-semibold transition ease-in-out delay-150 bg-gray-900 hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 duration-300", // Black button
          text: "text-white",
        },
      },
    },
    price: {
      title: "text-gray-900 font-bold",
      description: "text-gray-700",
      bgSolid: "bg-yellow-100",
      bgGradient: "bg-gradient-to-b from-yellow-200 to-yellow-100", // Light yellow gradient
      card: {
        bgGradient: "bg-yellow-50",
        border: "hover:border hover:border-yellow-400",
        title: "text-yellow-700 font-bold", // Darker yellow title
        description: "text-gray-700",
        text_color_primary: "text-gray-900",
        text_color_secondary: "text-gray-500",
        btn: {
          bgSolid: "transition ease-in-out delay-150 bg-gray-900 hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 duration-300", // Black button
          text: "text-white",
        },
      },
    },
    testimonial: {
      bgSolid: "bg-yellow-50",
      bgGradient: "bg-gradient-to-r from-yellow-100 to-yellow-50", // Light yellow gradient
      title: "text-gray-900 font-bold",
      description: "text-gray-700",
      card: {
        bgGradient: "bg-gradient-to-r from-white to-yellow-50", // White to light yellow
        border: "border-yellow-100",
        title: "text-gray-900",
        span: "text-yellow-600",
        description: "text-gray-700",
      },
    },
    footer: {
      title1: "text-gray-900",
      description: "text-gray-700",
    },
  },
};
