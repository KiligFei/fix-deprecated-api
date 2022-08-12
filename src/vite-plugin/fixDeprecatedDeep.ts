import fs from 'fs'

export function fixDeprecatedDeep() {
  return {
    name: 'fix-deprecated-deep',
    transform(src: any, id: string) {
      if (id.endsWith('.vue')) {
        const transformData = src.replace(/(?:\/deep\/|>>>|::v-deep)([\w.,\n\s-]+){$/gms, (e: string, r: string) => `:deep(${r}){`)
        fs.writeFile(id, transformData, (err) => {
          if (err)
            throw err
        })
        return transformData
      }
    },
  }
}
