const envs = ['API_URL', 'API_TOKEN'];

const { API_URL, API_TOKEN } = envs
  .map((env) => {
    return { [env]: import.meta.env[`VITE_${env}`] as string };
  })
  .reduce((a, k) => ({ ...a, ...k }), {});

export { API_URL, API_TOKEN };
