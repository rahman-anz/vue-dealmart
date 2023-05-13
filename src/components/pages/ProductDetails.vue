<template>
  <div class="main-box">
    <div class="left-column">
      <img
        class="cover-img"
        :src="require(`../../images/${coverImg}`)"
        alt="campus shoes"
      />
      <div class="img-gallery">
        <img
          @click="activateCover('')"
          :src="require(`../../images/${product.image}.jpg`)"
        />
        <img
          @click="activateCover('_1')"
          :src="require(`../../images/${product.image}_1.jpg`)"
        />
        <img
          @click="activateCover('_2')"
          :src="require(`../../images/${product.image}_2.jpg`)"
        />
        <img
          @click="activateCover('_3')"
          :src="require(`../../images/${product.image}_3.jpg`)"
        />
        <img
          @click="activateCover('_4')"
          :src="require(`../../images/${product.image}_4.jpg`)"
        />
      </div>
    </div>
    <div class="right-column">
      <h2>{{ product.title }}</h2>
      <p class="price">₹{{ product.price }}</p>
      <p class="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ab
        tenetur, ea voluptas aspernatur illo repellat sit! Culpa ex, illo vitae,
        quod incidunt, consequatur delectus pariatur nemo nisi repudiandae
        impedit.lor Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Labore ab tenetur, ea voluptas aspernatur illo repellat sit! Culpa ex,
        illo vitae, quod incidunt, consequatur delectus pariatur nemo nisi
        repudiandae impedit.lor Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Labore ab tenetur, ea voluptas aspernatur illo
        repellat sit! Culpa ex, illo vitae, quod incidunt, consequatur delectus
        pariatur nemo nisi repudiandae impedit.r
      </p>
    </div>
  </div>
</template>
<script setup>
import { useProductStore } from "@/store/product";
import { defineProps, defineExpose, ref } from "vue";
const props = defineProps({ id: String });
const store = useProductStore();
const product = store.getProductById(props.id);
const coverImg = ref(`${product.image}.jpg`);
const activateCover = (num) => {
  coverImg.value = `${product.image}` + num + ".jpg";
};

defineExpose({ product, activateCover, coverImg });
</script>
<style scoped>
.main-box {
  margin: -1rem 13%;
  display: flex;
  gap: 1rem;
}
.left-column {
  align-self: flex-start;
  position: sticky;
  width: 46%;
  top: 7rem;
}
.cover-img {
  width: 100%;
  height: 42rem;
  object-fit: contain;
}
.img-gallery {
  display: flex;
  width: 100%;
  gap: 0.3rem;
}
.img-gallery img {
  margin-top: 0.5rem;
  width: 100%;
  object-fit: contain;
  border-radius: 8px;
  /* border: 1px solid rgba(0, 0, 0, 0.367); */
  height: 8rem;
}

.right-column {
  background-color: #edfdfa;
  width: 55%;
  display: flex;
  flex-direction: column;
}
.right-column h2 {
  font-size: 2rem;
  text-align: center;
  margin: 3rem;
}
.price {
  font-size: 1.8rem;
  text-align: center;
}
.details {
  line-height: 1.8;
  padding: 18rem;
}
</style>
