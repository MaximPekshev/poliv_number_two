<template>
    <!-- site__footer -->
        <footer class="site__footer">
            <div class="site-footer">
                <div class="decor site-footer__decor decor--type--bottom">
                    <div class="decor__body">
                        <div class="decor__start"></div>
                        <div class="decor__end"></div>
                        <div class="decor__center"></div>
                    </div>
                </div>
                <div class="site-footer__widgets">
                    <div class="container">
                        <div class="row justify-content-around">
                            <div class="col-12 col-xl-4">
                                <FooterContactComponent />
                            </div>
                            <div class="col-12 col-md-6 col-xl-4">
                                <FooterLinksComponent />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="site-footer__bottom">
                    <div class="container">
                        <div class="site-footer__bottom-row">
                            <div class="site-footer__copyright">
                                Developed by <a href="https://annasoft.ru" target="_blank">Annasoft</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- site__footer / end -->
</template>

<script>
import FooterContactComponent from '@/components/Footer/FooterContactComponent.vue'
import FooterLinksComponent from '@/components/Footer/FooterLinksComponent.vue'
export default {
  name: 'FooterComponent',
  components: {
    FooterContactComponent,
    FooterLinksComponent
  }
}
</script>