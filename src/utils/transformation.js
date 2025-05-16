import { mockItems } from '../data/mockData';

export const transformData = (data) => {
  const authors = Object.entries(data).map(([id, data]) => ({
    id,
    name: data.author_name,
    language: data.author_language,
    style: data.author_style,
    ref_type: data.ref_type
  }));

  const assets = Object.values(data).reduce((assets, authorData) => {
    Object.entries(authorData.assets || {}).forEach(([region, regionAssets]) => {
      Object.keys(regionAssets).forEach(asset => {
        const assetId = `${region}/${asset}`;
        if (!assets.some(a => a.id === assetId)) {
          assets.push({
            id: assetId,
            name: assetId
          });
        }
      });
    });
    return assets;
  }, []);

  return { authors, assets };
};

export const init_state_from_data = async (fetchFn) => {
  const rawData = process.env.NODE_ENV === 'development' ? await fetchFn() : await fetchFn();
  return transformData(rawData);
};