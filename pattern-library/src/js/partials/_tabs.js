var componentsTabs = (function($) {
    var self = {},
        tab = {
            wrap: '[data-component="tabbed"]',
            trigger: '[data-component="tabbed__trigger"]',
            target: '[data-component="tabbed__target"]'
        },
        cl = {
            active: 'active'
        },
        attributes = {
            id: 'data-component-id'
        };

    self.init = function() {
        // Initially showing 1...
        $.each($(tab.wrap), function(index) {
            var $this = $(this),
                $active = $this.find('.' + cl.active);

            if ($active.length < 1) {
                var trigger = $this.find(tab.trigger)[0],
                    target = $this.find(tab.target)[0];

                $(trigger).addClass(cl.active);
                $(target).addClass(cl.active);
            }
        });

        $(tab.wrap).on('click', tab.trigger, selectTab);
    }

    self.setActive = function(id) {
        var $target = $(id),
            $trigger = $(tab.trigger + '[href="' + id + '"]'),
            $wrap = $trigger.parents(tab.wrap),
            $triggers = $wrap.find(tab.trigger),
            $targets = $wrap.find(tab.target);

        // Remove all...
        $targets.removeClass(cl.active);
        $triggers.removeClass(cl.active);

        // Activate
        $target.addClass(cl.active).attr('tabindex', -1).focus();
        $trigger.addClass(cl.active);
    }

    function selectTab(e) {
        e.preventDefault();

        var $trigger = $(this),
            id = $trigger.attr('href');

        self.setActive(id);
    }

    self.init();

    return self;

})(jQuery);
