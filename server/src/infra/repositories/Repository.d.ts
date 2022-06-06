export interface BaseRepository {
  model: () => Repository;
  persist: (data: Data) => Promise<Data>;
  delete: (id: Id) => Promise<void>;
  toData: (entity: Model) => Data;
  toModel: (data: Data) => Model;
}
