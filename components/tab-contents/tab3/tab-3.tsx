import HeroSection03 from "@/components/tab-contents/tab3/hero-section-03";
import { FeatureWithAdvantages } from "@/components/tab-contents/tab3/feature-with-advantages";
import ProductSpecsTable, { type Product } from "@/components/tab-contents/tab2/product-specs-table";
import { BluetoothFeatureCard } from "@/components/tab-contents/tab3/bluetooth-feature-card";
import Csstimeline03 from "@/components/tab-contents/tab3/csstimeline03/csstimeline03";

export function Tab3Content() {
  // 一般型筆型產品資料（4 款）
  const regularProducts: Product[] = [
    {
      name: "DPH1",
      model: "DPH1",
      partNumber: "AWE-4090010004",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/66-651ad54dde074fc6-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010004",
      specs: { phMv: true, orp: true, cond: false, do: false }
    },
    {
      name: "DORP1",
      model: "DORP1",
      partNumber: "AWE-4090010005",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/68-ed6fa26c82061389-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010005",
      specs: { phMv: false, orp: true, cond: false, do: false }
    },
    {
      name: "DEC1",
      model: "DEC1",
      partNumber: "AWE-4090010006",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/70-808af5f9dbda9f1e-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010006",
      specs: { phMv: false, orp: false, cond: true, do: false }
    },
    {
      name: "DPC1",
      model: "DPC1",
      partNumber: "AWE-4090010007",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/72-4c152837d0ecec47-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010007",
      specs: { phMv: true, orp: true, cond: true, do: false }
    }
  ];

  // 藍芽型筆型產品資料（4 款）
  const bluetoothProducts: Product[] = [
    {
      name: "DPH1+",
      model: "DPH1+",
      partNumber: "AWE-4090010000",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/67-2ca5a275b4060996-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010000",
      specs: { phMv: true, orp: true, cond: true, do: false }
    },
    {
      name: "DORP1+",
      model: "DORP1+",
      partNumber: "AWE-4090010001",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/69-51daeaf5698961b5-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010001",
      specs: { phMv: false, orp: true, cond: false, do: false }
    },
    {
      name: "DEC1+",
      model: "DEC1+",
      partNumber: "AWE-4090010002",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/71-4dc10b96aaa2355b-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010002",
      specs: { phMv: false, orp: false, cond: true, do: false }
    },
    {
      name: "DPC1+",
      model: "DPC1+",
      partNumber: "AWE-4090010003",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/73-6915cdf2ef4a9880-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010003",
      specs: { phMv: true, orp: true, cond: true, do: false }
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection03 />

      {/* 功能特點 */}
      <FeatureWithAdvantages />

      {/* 一般型產品表格 */}
      <ProductSpecsTable
        title="一般型"
        subtitle="筆型 水質檢測儀"
        description="穩定可靠，檢測隨時可得"
        products={regularProducts}
        gradientColors={["#B8A948", "#D2C85E", "#E6E07E", "#D2C85E", "#B8A948"]}
        primaryColor="#D2C85E"
      />

      {/* 藍芽型產品表格 */}
      <ProductSpecsTable
        title="藍牙型"
        subtitle="筆型 水質檢測儀"
        description="智慧連線，數據盡在掌握"
        extraDescription={<BluetoothFeatureCard />}
        products={bluetoothProducts}
        gradientColors={["#B8A948", "#D2C85E", "#E6E07E", "#D2C85E", "#B8A948"]}
        primaryColor="#D2C85E"
      />
      <Csstimeline03 />
    </div>
  );
}
