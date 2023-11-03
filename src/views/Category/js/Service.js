import Api from "@/api.js"

export const index = async () => {
  return await Api.get('category')
}
