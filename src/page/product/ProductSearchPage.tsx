import { t } from "i18next";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { productSearch } from "src/api/product/product-search";
import ProductView from "src/component/ProductView";

interface FormState {
  query: string;
}

export default function ProductSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || undefined;

  const { register, handleSubmit } = useForm<FormState>({ defaultValues: { query }});

  const onSearch = ({ query }: FormState) => {
    searchParams.set('query', query);
    setSearchParams(searchParams);
  }

  const { products, total } = productSearch.useApi({ query });

  const productViews = products.map(v => (
    <div className="py-2 border-bottom" key={v.id}>
      <ProductView product={v} />
    </div>
  ));

  return (
    <div className="ProductSearchPage pb-2">
      <Container>
        <div className="display-1 mb-3 text-center">{t('ProductSearchPage.title')}</div>
        <Form className="mb-2" onSubmit={handleSubmit(onSearch)}>
          <InputGroup>
            <Form.Control placeholder={t('ProductSearchPage.search-place-holder')} {...register('query')} />
            <Button type="submit">{t('ProductSearchPage.search-button')}</Button>
          </InputGroup>
        </Form>
        <div>{t('ProductSearchPage.result-num', [total])}</div>
        <div className="d-grid border-top">
          {productViews}
        </div>
      </Container>
    </div>
  )
}
