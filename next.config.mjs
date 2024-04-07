import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  env: {
    ADMIN_PATH_URL: process.env.ADMIN_PATH_URL,
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "styles"),
      path.join(__dirname, "Components"),
      path.join(__dirname, "Containers"),
      path.join(__dirname, "app"),
    ],
    additionalData: `@import "@/styles/variables.scss"; @import "@/styles/mixins.scss";@import "@/styles/animations.scss";@import "@/styles/functions.scss";`,
  },
};

export default nextConfig;
