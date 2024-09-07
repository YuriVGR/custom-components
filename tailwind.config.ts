import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear": "linear-gradient(to left top, #131313 20%, #282828 60%, #131313 100%)"
      },
    },
  },
  plugins: [],
} satisfies Config;
