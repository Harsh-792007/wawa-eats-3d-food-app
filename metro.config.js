const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Allow extra file extensions
["js", "jsx", "json", "ts", "tsx", "cjs", "mjs"].forEach((ext) => {
  if (!config.resolver.sourceExts.includes(ext)) {
    config.resolver.sourceExts.push(ext);
  }
});

// Allow 3D model + image assets
["glb", "gltf", "png", "jpg"].forEach((ext) => {
  if (!config.resolver.assetExts.includes(ext)) {
    config.resolver.assetExts.push(ext);
  }
});

module.exports = config;
